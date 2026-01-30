import { createClient } from "@/lib/supabase/server";
import SuccessClient from "./success-client";

async function fetchSubscriptionDetails(subscriptionId: string, accessToken: string) {
  const response = await fetch(
    `https://api-m.paypal.com/v1/billing/subscriptions/${subscriptionId}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(
      `Failed to fetch subscription details: ${errorData.error_description || response.statusText}`
    );
  }

  return response.json();
}

export default async function SuccessPage({
  searchParams,
}: {
  searchParams: { subscriptionId?: string };
}) {
  const { subscriptionId } = searchParams;

  if (!subscriptionId) {
    return <div>No subscription ID provided.</div>;
  }

  try {
    const supabase = await createClient();

    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (authError || !user) {
      return <div>User not authenticated.</div>;
    }

    const accessToken = fetch('/api/paypal', 
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        },
    );

    const accessTokenResponse = await accessToken;
    const accessTokenData = await accessTokenResponse.json();
    if (!accessTokenResponse.ok) {
        console.log("Error response data:", accessTokenData); 
        throw new Error(accessTokenData.error);
    }

    const accessTokenValue = accessTokenData.accessToken;

    const subscriptionDetails = await fetchSubscriptionDetails(
      subscriptionId,
      accessTokenValue
    );
    console.log("Fetched subscription details:", subscriptionDetails);

    return (
      <div>
        <SuccessClient subscriptionDetails={subscriptionDetails} />
      </div>
    );
  } catch (error) {
    console.error("Error fetching subscription details:", error);
    console.error("An error occurred while fetching subscription details:", error);
    return <div>Error fetching subscription details.</div>;
  }
}
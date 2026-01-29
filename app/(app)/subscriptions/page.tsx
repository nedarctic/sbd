import { Suspense } from "react";
import SubscriptionsGate from "./subscriptions-gate";
import SubscriptionsFallback from "./subscriptions-fallback";

export default function Page() {
  return (
    <Suspense fallback={<SubscriptionsFallback />}>
      <SubscriptionsGate />
    </Suspense>
  );
}

import { PAYPAL_SERVER_CONFIG } from "@/config/paypal.server";

const clientId = PAYPAL_SERVER_CONFIG.paypal_id;
const clientSecret = PAYPAL_SERVER_CONFIG.paypal_secret;
const PAYPAL_API = PAYPAL_SERVER_CONFIG.paypal_base;

export async function getPayPalAccessToken() {

	try {
		const response = await fetch(
			`${PAYPAL_API}/v1/oauth2/token`,
			{
				method: "POST",
				headers: {
					Accept: "application/json",
					"Accept-Language": "en_US",
					Authorization: `Basic ${Buffer.from(
						`${clientId}:${clientSecret}`
					).toString("base64")}`,
					"Content-Type": "application/x-www-form-urlencoded",
				},
				body: "grant_type=client_credentials",
			}
		);

		const data = await response.json();
		return data.access_token;
	} catch (error) {
		console.error("Error getting PayPal access token:", error);
		throw error;
	}
}

export async function getPayPalAccessToken_Sandbox() {
	try {
		const response = await fetch(
			`${PAYPAL_API}/v1/oauth2/token`,
			{
				method: "POST",
				headers: {
					Accept: "application/json",
					"Accept-Language": "en_US",
					Authorization: `Basic ${Buffer.from(
						`${clientId}:${clientSecret}`
					).toString("base64")}`,
					"Content-Type": "application/x-www-form-urlencoded",
				},
				body: "grant_type=client_credentials",
			}
		);

		const data = await response.json();
		return data.access_token;
	} catch (error) {
		console.error("Error getting PayPal access token:", error);
		throw error;
	}
}

export function getPayPalPlanName(planId: string) {
	switch (planId) {

		// sandbox plans
		case "P-39881017BT6923640NFPYAOI":
			return "Daily";
		case "P-5U915405S03367941NFPYB7A":
			return "Weekly";
		case "P-02095413EM5728148NFPYCOA":
			return "Monthly";
		case "P-65D31465NV598683BNFPYCSI":
			return "Yearly";

		// live plans
		case "P-1CR45848CH228015LNFQRDNA":
			return "Daily"
		case "P-34G36643Y9037544GNFQRDRQ":
			return "Weekly";
		case "P-39989793FF680434DNFQRDVA":
			return "Monthly";
		case "P-2W0268791L003394LNFQRDYY":
			return "Yearly";

		// default
		default:
			return "Unknown Plan";
	}
}
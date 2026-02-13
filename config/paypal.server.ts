import type { PAYPAL_MODE } from "@/types/paypal"

const PAYPAL_MODE: PAYPAL_MODE = "live"

export const PAYPAL_SERVER_CONFIG = {
    paypal_id: PAYPAL_MODE === "live" ? process.env.PAYPAL_CLIENT_ID : process.env.PAYPAL_CLIENT_ID_SANDBOX,
    paypal_secret: PAYPAL_MODE === "live" ? process.env.PAYPAL_CLIENT_SECRET : process.env.PAYPAL_CLIENT_SECRET_SANDBOX,
    paypal_base: PAYPAL_MODE === "live" ? process.env.PAYPAL_API_BASE_LIVE : process.env.PAYPAL_API_BASE_SANDBOX,
};

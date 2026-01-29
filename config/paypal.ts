import { PayPalConfig, SubscriptionPlan } from "@/types/paypal";

// to be used after testing is complete
// const isProd = process.env.NODE_ENV === "production"; 

export const PAYPAL_CONFIG: PayPalConfig = {
	// clientId: isProd ? process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID! : process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID_SANDBOX!,
  clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID_SANDBOX!,
	currency: process.env.NEXT_PUBLIC_PAYPAL_CURRENCY || "USD",
	// environment: isProd ? "production" : "sandbox",
  environment: "sandbox",
};

export const SUBSCRIPTION_PLANS: SubscriptionPlan[] = [ // sandbox plans
  {
    "id": "P-39881017BT6923640NFPYAOI",
    "name": "Daily Pass",
    "description": "Access to courses for 1 DAY",
    "price": 9.99,
    "interval": "DAY"
  },
  {
    "id": "P-5U915405S03367941NFPYB7A",
    "name": "Weekly Plan",
    "description": "Access to courses for 1 WEEK",
    "price": 24.99,
    "interval": "WEEK"
  },
  {
    "id": "P-02095413EM5728148NFPYCOA",
    "name": "Monthly Plan",
    "description": "Access to courses for 1 MONTH",
    "price": 79.99,
    "interval": "MONTH"
  },
  {
    "id": "P-65D31465NV598683BNFPYCSI",
    "name": "Yearly Access",
    "description": "Access to courses for 1 YEAR",
    "price": 599.99,
    "interval": "YEAR"
  }
]

// export const SUBSCRIPTION_PLANS: SubscriptionPlan[] = [ // production plans
//   {
//     id: "P-1CR45848CH228015LNFQRDNA",
//     name: "Daily Pass",
//     description: "Access to courses for 1 DAY",
//     price: 9.99,
//     interval: "DAY",
//   },
//   {
//     id: "P-34G36643Y9037544GNFQRDRQ",
//     name: "Weekly Plan",
//     description: "Access to courses for 1 WEEK",
//     price: 24.99,
//     interval: "WEEK",
//   },
//   {
//     id: "P-39989793FF680434DNFQRDVA",
//     name: "Monthly Plan",
//     description: "Access to courses for 1 MONTH",
//     price: 79.99,
//     interval: "MONTH",
//   },
//   {
//     id: "P-2W0268791L003394LNFQRDYY",
//     name: "Yearly Access",
//     description: "Access to courses for 1 YEAR",
//     price: 599.99,
//     interval: "YEAR",
//   },
// ];

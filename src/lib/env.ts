export const PG_MERCHENT_ID = process.env.PG_MERCHANT_ID;
export const PG_SALT_KEY =    process.env.PHONEPE_SALT_KEY;
export const PG_SALT_INDEX =  process.env.PHONEPE_SALT_INDEX;
export const PG_CALLBACK_URL = process.env.PHONEPE_CALLBACK_URL;
export const PG_CALL_MODE  = process.env.PHONEPE_CALL_MODE ;
export const PG_API_URL = process.env.PHONEPE_API_URL;
export const PG_REDIRECT_URL = process.env.PHONEPE_REDIRECT_URL;

export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-11-15";

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  "Missing environment variable: NEXT_PUBLIC_SANITY_DATASET"
);

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  "Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID"
);

export const MONGODB_URI = assertValue(
  process.env.NEXT_PUBLIC_MONGODB_URI,
  "Missing environment variable: MONGODB_URI"
);

export const HOST = assertValue(
  process.env.NEXT_PUBLIC_HOST,
  "Missing environment variable: HOST"
);

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }

  return v;
}

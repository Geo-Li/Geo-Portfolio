import { z } from "zod";

const mappedEnv = {
  FIREBASE_API_KEY:             import.meta.env.VITE_FIREBASE_API_KEY,
  FIREBASE_AUTH_DOMAIN:         import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  FIREBASE_PROJECT_ID:          import.meta.env.VITE_FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET:      import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  FIREBASE_MESSAGING_SENDER_ID: import.meta.env
                                  .VITE_FIREBASE_MESSAGING_SENDER_ID,
  FIREBASE_APP_ID:              import.meta.env.VITE_FIREBASE_APP_ID,
  FIREBASE_MEASUREMENT_ID:      import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,

  GEO_KEY:                      import.meta.env.VITE_GEO_KEY,
};

const zEnv = z.object({
  FIREBASE_API_KEY:             z.string(),
  FIREBASE_AUTH_DOMAIN:         z.string(),
  FIREBASE_PROJECT_ID:          z.string(),
  FIREBASE_STORAGE_BUCKET:      z.string(),
  FIREBASE_MESSAGING_SENDER_ID: z.string(),
  FIREBASE_APP_ID:              z.string(),
  FIREBASE_MEASUREMENT_ID:      z.string(),

  GEO_KEY:                      z.string(),
});

export const env = zEnv.parse(mappedEnv);

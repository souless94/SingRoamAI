import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    GOOGLE_CLIENT_ID: z.string().min(1),
    GOOGLE_CLIENT_SECRET: z.string().min(1),
    SUPERTOKENS_URI: z.string().min(1),
    SUPERTOKENS_API_KEY: z.string().min(1),
    ENABLE_EMAIL_ALLOWLIST_UPDATE: z.boolean(),
    USER_EMAIL_WHITELIST_STRING: z.string(),
    ENABLE_EMAIL_BYPASS: z.boolean(),
    GEMINI_API_KEY: z.string(),
    UNSPlASH_ACCESS_KEY: z.string(),
    UNSPLASH_API_URL: z.string()
  },
  runtimeEnv: {
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    SUPERTOKENS_URI: process.env.SUPERTOKENS_URI,
    SUPERTOKENS_API_KEY:process.env.SUPERTOKENS_API_KEY,
    ENABLE_EMAIL_ALLOWLIST_UPDATE: z.boolean().parse(process.env.ENABLE_EMAIL_ALLOWLIST_UPDATE === "true"),
    USER_EMAIL_WHITELIST_STRING: process.env.USER_EMAIL_WHITELIST_STRING,
    ENABLE_EMAIL_BYPASS: z.boolean().parse(process.env.ENABLE_EMAIL_ALLOWLIST_UPDATE === "true"),
    GEMINI_API_KEY: process.env.GEMINI_API_KEY,
    UNSPlASH_ACCESS_KEY: process.env.UNSPlASH_ACCESS_KEY,
    UNSPLASH_API_URL: process.env.UNSPLASH_API_URL
  },
});

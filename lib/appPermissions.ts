import { env } from "@/config/env";
import UserMetadata from "supertokens-node/recipe/usermetadata";
import { z } from "zod";
import logger from "./logger";


const emailSchema = z.array(z.string().email());

export async function addEmailToAllowlist() {
  const emails = env.USER_EMAIL_WHITELIST_STRING.split(",").map((email) =>
    email.trim()
  );
  const parsedEmails = emailSchema.safeParse(emails);
  if (!parsedEmails.success) {
    logger.error("Invalid emails:", parsedEmails.error.format());
    throw new Error("System Error Invalid emails");
  }
  await UserMetadata.updateUserMetadata("emailAllowList", {
    emails,
  });

}

export async function isEmailAllowed(email: string) {

  logger.info(`ENABLE_EMAIL_ALLOWLIST_UPDATE is set to ${env.ENABLE_EMAIL_ALLOWLIST_UPDATE}` );

  if (env.ENABLE_EMAIL_ALLOWLIST_UPDATE) {
    await addEmailToAllowlist();
  }
  const updatedData = await UserMetadata.getUserMetadata("emailAllowList");
  const allowList: string[] = updatedData.metadata.emails || [];

  logger.info(`allowList is ${allowList.toString()}` )

  return allowList.includes(email);
}


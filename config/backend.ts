import SuperTokens from "supertokens-node";
import { env } from "./env";
import ThirdPartyNode from "supertokens-node/recipe/thirdparty";
import SessionNode from "supertokens-node/recipe/session";
import UserMetadata from "supertokens-node/recipe/usermetadata";
import { appInfo } from "./appInfo";
import { TypeInput } from "supertokens-node/types";
import { isEmailAllowed } from "@/lib/utils";

export const backendConfig = (): TypeInput => {
  return {
    framework: "custom",
    supertokens: {
      connectionURI: env.SUPERTOKENS_URI,
      apiKey: env.SUPERTOKENS_API_KEY,
    },
    appInfo,
    recipeList: [
      ThirdPartyNode.init({
        signInAndUpFeature: {
          providers: [
            {
              config: {
                thirdPartyId: "google",
                clients: [
                  {
                    clientId: env.GOOGLE_CLIENT_ID,
                    clientSecret: env.GOOGLE_CLIENT_SECRET,
                  },
                ],
              },
            },
          ],
        },
        override: {
          functions: (originalImplementation) => {
            return {
              ...originalImplementation,
              signInUp: async function (input) {
                if (!(await isEmailAllowed(input.email))) {
                  // email is not in allow list, so we disallow
                  throw new Error("Not authorised user");
                }

                // We allow the sign in / up operation
                return originalImplementation.signInUp(input);
              },
            };
          },
          apis: (originalImplementation) => {
            return {
              ...originalImplementation,
              signInUpPOST: async function (input) {
                try {
                  return await originalImplementation.signInUpPOST!(input);
                } catch (err: any) {
                  if (err.message === "Not authorised user") {
                    // this error was thrown from our function override above.
                    // so we send a useful message to the user
                    return {
                      status: "GENERAL_ERROR",
                      message:
                        "Sign ups are disabled. Please contact the admin.",
                    };
                  }
                  throw err;
                }
              },
            };
          },
        },
      }),
      SessionNode.init(),
      UserMetadata.init(),
    ],
    isInServerlessEnv: true,
  };
};

let initialized = false;
// This function is used in your APIs to make sure SuperTokens is initialised
export function ensureSuperTokensInit() {
  if (!initialized) {
    SuperTokens.init(backendConfig());
    initialized = true;
  }
}

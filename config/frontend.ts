import ThirdParty, { Google } from "supertokens-auth-react/recipe/thirdparty";
import SessionReact from "supertokens-auth-react/recipe/session";
import { appInfo } from "./appInfo";
import { useRouter } from "next/navigation";
import { SuperTokensConfig } from "supertokens-auth-react/lib/build/types";

const routerInfo: { router?: ReturnType<typeof useRouter>; pathName?: string } =
  {};

export function setRouter(
  router: ReturnType<typeof useRouter>,
  pathName: string
) {
  routerInfo.router = router;
  routerInfo.pathName = pathName;
}

export const frontendConfig = (): SuperTokensConfig => {
  return {
    appInfo,
    languageTranslations: { 
      translations: { 
        en: {
          AUTH_PAGE_HEADER_TITLE_SIGN_IN_AND_UP: "✈️ Sign In To SingRoamAI",
        },
      },
    },
    getRedirectionURL: async (context) => {
      if (context.action === "SUCCESS" && context.newSessionCreated) {
        if (context.redirectToPath !== undefined) {
          // we are navigating back to where the user was before they authenticated
          return context.redirectToPath;
        }
        return "/dashboard";
      }
      return undefined;
    },
    style: `
    [data-supertokens~=superTokensBranding] {
        display: none
    }`,
    recipeList: [
      ThirdParty.init({
        signInAndUpFeature: {
          providers: [Google.init()],
        },
      }),
      SessionReact.init(),
    ],
  }
   
};

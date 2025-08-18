"use client";

import { useEffect, useState } from "react";
import { redirectToAuth } from "supertokens-auth-react";
import SuperTokens from "supertokens-auth-react/ui";
import { ThirdPartyPreBuiltUI } from "supertokens-auth-react/recipe/thirdparty/prebuiltui";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";

export default function Auth() {
  // if the user visits a page that is not handled by us (like /auth/random), then we redirect them back to the auth page.
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    if (SuperTokens.canHandleRoute([ThirdPartyPreBuiltUI]) === false) {
      redirectToAuth({ redirectBack: false });
    } else {
      setLoaded(true);
    }
  }, []);

  if (loaded) {
    return (
      <div className="flex min-h-screen flex-col overflow-hidden">
        <section>
          <Alert variant="default">
            <Terminal />
            <AlertTitle>Note</AlertTitle>
            <AlertDescription>The Google Login is Demo</AlertDescription>
          </Alert>
          {SuperTokens.getRoutingComponent([ThirdPartyPreBuiltUI])}
        </section>
        <section>
          <div className="flex items-center">
            <div className="mx-auto">
              <Button asChild>
                <Link href="/">Back to Home</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return null;
}

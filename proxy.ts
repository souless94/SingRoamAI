import { withSession } from "supertokens-node/nextjs";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { SessionContainer } from "supertokens-node/recipe/session";
import { ensureSuperTokensInit } from "./config/backend";
import { contentSecurityPolicyHeaderValue, nonce } from "./utils/cspConfig";

ensureSuperTokensInit();

export async function proxy(
  request: NextRequest & { session?: SessionContainer }
) {
  const securityHeaders = {
    "x-nonce": nonce,
    "X-Content-Type-Options": "nosniff",
    "X-Frame-Options": "DENY",
    "X-XSS-Protection": "1; mode=block",
    "x-powered-by": "NA",
    "Content-Security-Policy": contentSecurityPolicyHeaderValue,
    "Strict-Transport-Security": "max-age=63072000; includeSubDomains; preload",
    "Referrer-Policy": "strict-origin-when-cross-origin",
    "Permissions-Policy": [
      "camera=()",
      "microphone=()",
      "geolocation=()",
      "autoplay=()",
      "fullscreen=()",
      "payment=()",
      "gyroscope=()",
      "magnetometer=()",
      "accelerometer=()",
      "ambient-light-sensor=()",
      "speaker-selection=()",
      "vibrate=()",
      "clipboard-read=()",
      "clipboard-write=()",
      "usb=()",
      "xr-spatial-tracking=()",
    ].join(", "),
  };

  if (request.headers.has("x-user-id")) {
    console.warn(
      "The FE tried to pass x-user-id, which is only supposed to be a backend internal header. Ignoring."
    );
    request.headers.delete("x-user-id");
  }

  if (request.nextUrl.pathname.startsWith("/api/auth")) {
    /**
     * /api/auth/* endpoints are exposed by the SuperTokens SDK,
     * we do not want to modify the request for these routes
     */
    return NextResponse.next({ headers: securityHeaders});
  }

  return withSession(request, async (err, session) => {
    if (err) {
      return NextResponse.json(err, { status: 500 , headers: securityHeaders });
    }
    if (session === undefined) {
      return NextResponse.next({ headers: securityHeaders});
    }
    return NextResponse.next({
      headers: {
        // You cannot attach the full session object here
        "x-user-id": session.getUserId(),
        ...securityHeaders
      },
    });
  });
}

export const config = {
  matcher: "/api/:path*",
};

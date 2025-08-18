import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { contentSecurityPolicyHeaderValue, nonce } from "./utils/cspConfig";

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

export function securityHeadersMiddleware(
  request: NextRequest,
  res: NextResponse
) {
  Object.entries(securityHeaders).forEach(([k, v]) => {
    res.headers.set(k, v); // replaces or adds header
  });
  return res;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};

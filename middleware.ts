import { NextRequest } from "next/server";
import { securityHeadersMiddleware } from "./sec-middleware";
import { supertokensMiddleware } from "./st-middleware";

export async function middleware(request: NextRequest) {
  const res = await supertokensMiddleware(request); // handles session
  return securityHeadersMiddleware(request,res); // always attach headers
}

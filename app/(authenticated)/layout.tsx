"use client";

import { ReactNode } from "react";
import { SessionAuth } from "supertokens-auth-react/recipe/session";

export default function AuthenticatedLayout({
  children,
}: {
  children: Readonly<ReactNode>;
}) {
  return <SessionAuth>{children}</SessionAuth>;
}

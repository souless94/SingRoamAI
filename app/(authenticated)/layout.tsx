"use client";

import { AppSidebar } from "@/components/ui/layout/app/appSidebar";
import { AppFooter } from "@/components/ui/layout/shared/footer";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { ReactNode } from "react";
import { Toaster } from "sonner";
import { SessionAuth } from "supertokens-auth-react/recipe/session";

export default function AuthenticatedLayout({
  children,
}: {
  children: Readonly<ReactNode>;
}) {
  return (
    <SessionAuth>
      <SidebarProvider>
        <AppSidebar />
        <SidebarTrigger />
        <SidebarInset>
          <main>{children}</main>
          <Toaster/>
        </SidebarInset>
      </SidebarProvider>
    </SessionAuth>
  );
}

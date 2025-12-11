import { Home, LogOut } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Separator } from "../../separator";
import Link from "next/link";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "../../avatar";
import {
  signOut,
  useSessionContext,
} from "supertokens-auth-react/recipe/session";
import { useRouter } from "next/navigation";
import useSWR from "swr";
import { appUser } from "@/lib/generated/prisma/client";

// Menu items.
const menuItems = [
  {
    title: "Home",
    url: "/dashboard",
    icon: Home,
  },
];

// Menu items.
const settingItems = [
  {
    title: "Profile",
    url: "#",
    icon: Home,
  },
];

export function AppSidebar() {
  const session = useSessionContext();
  const router = useRouter();
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  // Check session loading or session existence and pass `null` to useSWR if not ready
  const shouldFetch =
    !session.loading && session.doesSessionExist && session.userId;

  const {
    data: appUser,
    error,
    isLoading,
  } = useSWR<appUser>(
    shouldFetch ? `/api/users/${session.userId}` : null, // Fetch only if session is ready
    fetcher
  );

  if (session.loading) {
    return <div>Loading...</div>;
  }

  if (session.doesSessionExist === false) {
    router.push("/auth");
    return;
  }

  if (isLoading) return <div>Loading Menu ...</div>;
  if (error) return <div>Error: {error.message}</div>;

  async function onLogout() {
    await signOut();
    router.push("/auth"); // or redirect to wherever the login page is
    return;
  }

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <Link href="/dashboard" className="flex items-center gap-1">
                <Image
                  src="/images/logo.png" // Path to your logo image
                  alt="Logo" // Alt text for accessibility
                  width={50} // Set width of the logo
                  height={50} // Set height of the logo
                />
                singroamAI
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <Separator />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <div className="flex items-center gap-3">
                  <Avatar className="h-8 w-8 rounded-lg">
                    <AvatarImage src={appUser?.imageUrl} alt={session.userId} />
                    <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                  </Avatar>
                  <div className="text-sm leading-tight">
                    <span className="truncate font-semibold">
                      {appUser?.email}
                    </span>
                  </div>
                </div>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <Separator />

        <SidebarGroup>
          <SidebarGroupLabel className="text-l font-medium text-muted-foreground mb-2 px-2">
            MAIN
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <Separator />

        <SidebarGroup>
          <SidebarGroupLabel className="text-l font-medium text-muted-foreground mb-2 px-2">
            Profile
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {settingItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <Separator />
        {/* Logout button */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton onClick={onLogout}>
                  <LogOut className="h-5 w-5 text-muted-foreground" />
                  <span>logout</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useSessionContext, signOut } from "supertokens-auth-react/recipe/session";

function NavBar() {

  const router = useRouter();

  async function onLogout() {
    await signOut();
    router.push("/auth"); // or redirect to wherever the login page is
  }
  return (
    <ul>
      <li>Home</li>
      <Button variant="outline" onClick={() => void onLogout()}>Logout</Button>
    </ul>
  );
}

export default function Dashboard() {
  const session = useSessionContext();

  if (session.loading) {
    return <div>Loading...</div>;
  }

  if (session.doesSessionExist === false) {
    return <div>Session does not exist</div>;
  }

  return (
    <div>
      <h1>Welcome, {session.userId}!</h1>
      <NavBar />
    </div>
  );
}

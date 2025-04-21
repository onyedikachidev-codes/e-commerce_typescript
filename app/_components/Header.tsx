import Navigation from "@/app/_components/Navigation";
import { auth } from "../_lib/auth";
import { useSession } from "next-auth/react";

export default function Header() {
  const { data: session } = useSession(); // Fetch session client-side

  return (
    <header className="py-5 fixed left-0 top-0 w-full backdrop-blur-lg z-40 shadow-md">
      <Navigation session={session} />
    </header>
  );
}

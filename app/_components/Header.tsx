import { useSession } from "next-auth/react";

import Navigation from "@/app/_components/Navigation";

export default function Header() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return null;
  }

  return (
    <header className="py-5 fixed left-0 top-0 w-full backdrop-blur-lg z-40 shadow-md">
      <Navigation session={session} />
    </header>
  );
}

import { useSession } from "next-auth/react";
import { Montserrat } from "next/font/google";

import Navigation from "@/app/_components/Navigation";
import MobileNav from "@/app/_components/MobileNav";

const mons = Montserrat({
  subsets: ["latin"],
  variable: "--font-mons",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Header() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return null;
  }

  return (
    <header
      className={`${mons.className} py-5 fixed left-0 top-0 w-full backdrop-blur-lg z-40 shadow-md`}
    >
      <div className="hidden lg:block">
        <Navigation session={session} />
      </div>

      <div className="lg:hidden block">
        <MobileNav session={session} />
      </div>
    </header>
  );
}

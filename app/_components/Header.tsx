import { useSession } from "next-auth/react";
import { Montserrat } from "next/font/google";

import MobileNav from "@/app/_components/MobileNav";
import PrimaryNav from "./PrimaryNav";

const mons = Montserrat({
  subsets: ["latin"],
  variable: "--font-mons",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Header() {
  const { data: session } = useSession();

  return (
    <header
      className={`${mons.className} block lg:fixed left-0 top-0 w-full bg-white lg:backdrop-blur-lg z-40 shadow-md`}
    >
      <div className="hidden lg:block">
        <PrimaryNav session={session} />
      </div>

      <div className="lg:hidden block">
        <MobileNav session={session} />
      </div>
    </header>
  );
}

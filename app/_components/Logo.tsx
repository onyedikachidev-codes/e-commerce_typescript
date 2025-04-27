import React from "react";

import { Dancing_Script } from "next/font/google";

const dancing = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export default function Logo() {
  return (
    <h1
      className={`${dancing.className} font-bold text-3xl lg:text-4xl transform -rotate-[4deg] origin-left`}
    >
      Trivela
    </h1>
  );
}

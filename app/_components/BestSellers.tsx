import React from "react";

import { Montserrat } from "next/font/google";
import ProductGrid from "./ProductGrid";

const mons = Montserrat({
  subsets: ["latin"],
  variable: "--font-mons",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export default function BestSellers() {
  return (
    <section className={`${mons.className} min-h-screen`}>
      <div className="flex justify-between items-end px-10 pb-4">
        <h2 className="uppercase text-5xl font-semibold pt-12">BestSellers</h2>
      </div>

      <ProductGrid />
    </section>
  );
}

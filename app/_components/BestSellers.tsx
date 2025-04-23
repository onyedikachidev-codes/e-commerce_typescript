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
      <div className="text-center my-8">
        <h2 className="text-2xl font-semibold text-[#2C3E50]">New Arrivals</h2>
        <div className="w-16 h-1 bg-blue-500 mx-auto mt-2 rounded" />
      </div>

      <ProductGrid />
    </section>
  );
}

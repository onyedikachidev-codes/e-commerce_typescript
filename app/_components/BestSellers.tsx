import React from "react";

import { Montserrat } from "next/font/google";
import Link from "next/link";
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

        <ul
          className={`${mons.className} lg:flex hidden items-center gap-8 text-xl text-black uppercase`}
        >
          <li>
            <Link href="/explore" className="relative group">
              <span className="text-gray-800 hover:text-gray-500 transition duration-300">
                For him
              </span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gray-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>

          <li>
            <Link href="/about" className="relative group">
              <span className="text-gray-800 hover:text-gray-500 transition duration-300 ">
                For her
              </span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gray-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link
              href="mailto:nwangumabimma@gmail.com"
              className="relative group"
            >
              <span className="text-gray-800 hover:text-gray-500 transition duration-300 ">
                See All
              </span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gray-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
        </ul>
      </div>

      <ProductGrid />
    </section>
  );
}

"use client";

import { Montserrat } from "next/font/google";

import Header from "@/app/_components/Header";
import SearchBar from "@/app/_components/SearchBar";
import Button from "@/app/_components/Button";
import BestSellers from "@/app/_components/BestSellers";
import About from "./_components/About";
import Footer from "./_components/Footer";
import Socials from "./_components/Socials";

const mons = Montserrat({
  subsets: ["latin"],
  variable: "--font-mons",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export default function Home() {
  return (
    <main>
      <section className="min-h-screen bg-gradient-to-br from-[#f5f7fa] to-[#e4ecf4]">
        <Header />

        <div className={`${mons.className} pt-30 flex justify-end px-5`}>
          <SearchBar />
        </div>

        <div
          className={`${mons.className} flex flex-col items-center gap-4 pl-8 pt-16`}
        >
          <h1 className="text-7xl uppercase font-semibold max-w-[60%] leading-[1.10] flex flex-col items-center drop-shadow-md">
            Your Cart is
            <span className="">Waiting.</span>
          </h1>
          <h2 className="text-xl text-gray-700">
            Your next favorite thing is just a click away.
          </h2>
          <div className="relative inline-block">
            <Button onClick={() => console.log("clicked")} type="cta">
              Shop Now
            </Button>
            <Button onClick={() => console.log("clicked")} type="black">
              Shop Now
            </Button>
          </div>
        </div>

        <Socials />
      </section>

      <BestSellers />
      <section className={`${mons.className} min-h-[90dvh]`}>
        <About />
        <Footer />
      </section>
    </main>
  );
}

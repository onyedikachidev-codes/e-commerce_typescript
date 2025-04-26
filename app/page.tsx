"use client";

import { Montserrat } from "next/font/google";

import Header from "@/app/_components/Header";
import SearchBar from "@/app/_components/SearchBar";
import Button from "@/app/_components/Button";
import BestSellers from "@/app/_components/BestSellers";
import About from "@/app/_components/About";
import Footer from "@/app/_components/Footer";
import Socials from "@/app/_components/Socials";
import { useRouter } from "next/navigation";

const mons = Montserrat({
  subsets: ["latin"],
  variable: "--font-mons",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export default function Home() {
  const router = useRouter();

  return (
    <main>
      <section className="min-h-screen relative flex flex-col bg-gradient-to-br from-[#f5f7fa] to-[#e4ecf4]">
        <Header />

        <div className={`${mons.className} pt-30 flex justify-end px-5`}>
          <SearchBar />
        </div>

        <div
          className={`${mons.className} flex-1 flex flex-col items-center justify-center gap-4 text-center`}
        >
          <h1 className="text-5xl md:text-7xl uppercase font-semibold max-w-[80%] md:max-w-[60%] leading-[1.10] flex flex-col items-center drop-shadow-md">
            Your Cart is
            <span className="">Waiting.</span>
          </h1>
          <h2 className="text-xl text-gray-700 mx-4">
            Your next favorite thing is just a click away.
          </h2>
          <div className="relative inline-block mt-6 lg:mt-0">
            <Button onClick={() => router.push("/products")} type="cta">
              Shop Now
            </Button>
            <Button onClick={() => console.log("clicked")} type="black">
              Shop Now
            </Button>
          </div>
        </div>

        <Socials />
      </section>

      <div id="best" className="">
        &nbsp;
      </div>
      <BestSellers />

      <div id="about" className="">
        &nbsp;
      </div>
      <section className={`${mons.className} min-h-[90dvh]`}>
        <About />
        <Footer />
      </section>
    </main>
  );
}

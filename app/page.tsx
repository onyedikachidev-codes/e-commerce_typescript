"use client";

import { Montserrat } from "next/font/google";

import BestSellers from "@/app/_components/BestSellers";
import Footer from "@/app/_components/Footer";
import Header from "@/app/_components/Header";
import Navigation from "@/app/_components/Navigation";
import Hero from "./_components/Hero";
import Delivery from "./_components/Delivery";
import History from "./_components/History";
import ServiceBanner from "./_components/ServiceBanner";

const mons = Montserrat({
  subsets: ["latin"],
  variable: "--font-mons",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export default function Home() {
  return (
    <main>
      <section className="min-h-screen">
        <Header />
        <Navigation />

        <div className="mt-2">
          <Hero />
        </div>
      </section>

      <div id="best" className="">
        &nbsp;
      </div>
      <BestSellers />

      <div id="delivery" className="">
        &nbsp;
      </div>
      <section className={`${mons.className} `}>
        <Delivery />
        <div id="about" className="">
          &nbsp;
        </div>
        <History />
        <ServiceBanner />
        <Footer />
      </section>
    </main>
  );
}

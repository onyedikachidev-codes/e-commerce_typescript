"use client";

import type { Metadata } from "next";
import {
  Poppins,
  Cedarville_Cursive,
  Montserrat,
  Dancing_Script,
} from "next/font/google";
import "@/app/_styles/globals.css";
import { Provider } from "react-redux";
import store from "./store";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const mons = Montserrat({
  subsets: ["latin"],
  variable: "--font-mons",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const cursive = Cedarville_Cursive({
  subsets: ["latin"],
  variable: "--font-cursive",
  display: "swap",
  weight: ["400"],
});

const dancing = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Trivela",
    template: "Trivela | %s",
  },
  description:
    "Trivela is your one-stop online store for stylish, affordable, and high-quality products. Discover deals, shop smart, and enjoy seamless delivery — wherever you are.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${cursive.variable} ${mons.variable} ${dancing.variable} antialiased`}
      >
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}

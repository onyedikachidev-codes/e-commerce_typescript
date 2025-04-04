import type { Metadata } from "next";
import { Poppins, Cedarville_Cursive, Montserrat } from "next/font/google";
import "@/app/_styles/globals.css";

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
        className={`${poppins.variable} ${cursive.variable} ${mons.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

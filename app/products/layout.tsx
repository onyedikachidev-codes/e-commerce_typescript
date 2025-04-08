"use client";

import { Montserrat } from "next/font/google";
import "@/app/_styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const mons = Montserrat({
  subsets: ["latin"],
  variable: "--font-mons",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function ProductLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className={`${mons.variable} antialiased`}>{children}</div>
    </QueryClientProvider>
  );
}

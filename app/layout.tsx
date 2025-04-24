"use client";

// import type { Metadata } from "next";
import {
  Poppins,
  Cedarville_Cursive,
  Montserrat,
  Dancing_Script,
} from "next/font/google";
import "@/app/_styles/globals.css";
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { PersistGate } from "redux-persist/integration/react";
import { SessionProvider } from "next-auth/react";

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

// export const metadata: Metadata = {
//   title: {
//     default: "Trivela",
//     template: "Trivela | %s",
//   },
//   description:
//     "Trivela is your one-stop online store for stylish, affordable, and high-quality products. Discover deals, shop smart, and enjoy seamless delivery — wherever you are.",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient();
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${cursive.variable} ${mons.variable} ${dancing.variable} antialiased`}
      >
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <SessionProvider>
              <QueryClientProvider client={queryClient}>
                {children}
                <Toaster
                  position="top-center"
                  gutter={12}
                  containerStyle={{ margin: "8px" }}
                  toastOptions={{
                    success: {
                      duration: 3000,
                    },
                    error: {
                      duration: 5000,
                    },
                    style: {
                      fontSize: "16px",
                      maxWidth: "500px",
                      padding: "16px 24px",
                      backgroundColor: "var(--color-primary-50)",
                      color: "black",
                      zIndex: 999999,
                    },
                  }}
                />
              </QueryClientProvider>
            </SessionProvider>
          </PersistGate>
        </Provider>
      </body>
    </html>
  );
}

import React from "react";
import Header from "../Header";
import Button from "../Button";
import { useRouter } from "next/navigation";
import Footer from "../Footer";

export default function EmptyCart() {
  const router = useRouter();
  return (
    <>
      <div className="min-h-screen relative flex flex-col bg-gradient-to-br from-[#f5f7fa] to-[#e4ecf4]">
        <Header />

        <section className="flex-1 flex flex-col items-center justify-center">
          <div className="p-6 bg-white rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="blue"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-24 xs:size-28"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </div>
          <p className="text-2xl font-semibold mt-2.5">Your cart is empty!</p>

          <div className="flex items-center justify-center">
            <div className="relative inline-block md:mt-7 mt-10">
              <Button onClick={() => router.push("/products")} type="cta">
                Shop Now
              </Button>
              <Button onClick={() => console.log("clicked")} type="black">
                Shop Now
              </Button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

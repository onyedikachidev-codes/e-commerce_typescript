import React from "react";
import Button from "./Button";
import { useRouter } from "next/navigation";

export default function About() {
  const router = useRouter();
  return (
    <>
      <div className="mx-20 text-gray-800">
        <h2 className="uppercase text-gray-700 text-2xl font-semibold">
          About Trivela
        </h2>
        <p className="lg:max-w-[97%] md:max-w-[97%] max-w-full mt-2 text-xl font-medium ">
          At Trivela, we&apos;re passionate about bringing you stylish and
          affordable fashion that fits your everyday lifestyle. Born from a love
          for clean designs and quality materials, we set out to create pieces
          that you&apos;ll reach for over and over again. Whether you&apos;re
          chasing your dreams or just kicking back, Trivela has your look
          covered.
        </p>
        <h2 className="uppercase text-gray-700 text-2xl font-semibold pt-8">
          Why Trivela?
        </h2>
        <ul className="lg:max-w-[97%] md:max-w-[95%] max-w-full mt-2 text-xl font-medium pl-8 flex flex-col gap-2">
          <li className="flex gap-2 items-center">
            <span>1.</span>
            Quality you can feel – We don’t compromise on materials or
            craftsmanship.
          </li>
          <li className="flex gap-2 items-center">
            <span>2.</span>
            Community-first – We listen, we learn, and we grow with our
            customers.
          </li>
          <li className="flex gap-2 items-center">
            <span>3.</span>
            Timeless, not trendy – Our styles are designed to outlive the
            seasons.
          </li>

          <li className="flex gap-2 items-center">
            <span>4.</span>
            Fair pricing – Premium shouldn’t mean overpriced. We keep it real.
          </li>
        </ul>
      </div>

      <div className="flex items-center justify-center">
        <div className="relative inline-block mt-4 ">
          <Button onClick={() => router.push("/products")} type="cta">
            Shop Now
          </Button>
          <Button onClick={() => console.log("clicked")} type="black">
            Shop Now
          </Button>
        </div>
      </div>
    </>
  );
}

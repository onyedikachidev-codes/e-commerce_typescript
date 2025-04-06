import React from "react";
import Button from "./Button";

import Link from "next/link";

export default function About() {
  return (
    <>
      <div className="lg:ml-32 md:ml-24 mx-10 text-gray-800">
        <h2 className="uppercase text-gray-700 text-2xl font-semibold">
          About Trivela
        </h2>
        <p className="lg:max-w-[91%] md:max-w-[95%] max-w-full mt-2 text-xl font-medium ">
          At Trivela, we&apos;re passionate about bringing you stylish and
          affordable fashion that fits your everyday lifestyle. Born from a love
          for clean designs and quality materials, we set out to create pieces
          that you&apos;ll reach for over and over again. Whether you&apos;re
          chasing your dreams or just kicking back, Trivela has your look
          covered.
        </p>
        <h2 className="uppercase text-gray-700 text-2xl font-semibold pt-8">
          Our promise?
        </h2>
        <p className="lg:max-w-[91%] md:max-w-[95%] max-w-full mt-2 text-xl font-medium ">
          Great style, zero stress. Thanks for being part of our journey.
          Let&apos;s keep it simple and fresh.
        </p>
      </div>

      <div className="flex items-center justify-center">
        <div className="relative inline-block mt-4 ">
          <Button onClick={() => console.log("clicked")} type="cta">
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

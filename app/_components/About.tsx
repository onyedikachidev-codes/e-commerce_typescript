import React from "react";
import Button from "./Button";
import { useRouter } from "next/navigation";
import RatingCard from "./RatingCard";

export default function About() {
  const router = useRouter();
  return (
    <div className="bg-gradient-to-br from-[#f5f7fa] to-[#e4ecf4] pt-6">
      <div className="md:mx-20 mx-5 text-gray-800">
        <div className="my-8 text-center">
          <h2 className="text-2xl font-semibold text-[#2C3E50]">
            About Trivela
          </h2>
          <div className="w-20 md:h-1 h-0.5 bg-blue-500 mt-1 rounded mx-auto" />
        </div>
        <p className="lg:max-w-[97%] md:max-w-[97%] md:mx-0 mx-[5%] max-w-full mt-2 text-base md:text-xl font-medium">
          At Trivela, we&apos;re passionate about bringing you stylish and
          affordable fashion that fits your everyday lifestyle. Born from a love
          for clean designs and quality materials, we set out to create pieces
          that you&apos;ll reach for over and over again.
        </p>
      </div>

      <RatingCard />

      <div className="flex items-center justify-center">
        <div className="relative inline-block mt-8 mb-8 ">
          <Button onClick={() => router.push("/products")} type="cta">
            Shop Now
          </Button>
          <Button onClick={() => console.log("clicked")} type="black">
            Shop Now
          </Button>
        </div>
      </div>
      <div />
    </div>
  );
}

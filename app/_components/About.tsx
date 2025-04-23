import React from "react";
import Button from "./Button";
import { useRouter } from "next/navigation";
import RatingCard from "./RatingCard";

import face from "@/public/face.jpg";
import reva from "@/public/reva.jpg";
import finest from "@/public/finest.jpg";

export default function About() {
  const router = useRouter();
  return (
    <>
      <div className="mx-20 text-gray-800">
        <div className="my-8">
          <h2 className="text-2xl font-semibold text-[#2C3E50]">
            About Trivela
          </h2>
          <div className="w-16 h-1 bg-blue-500 mt-1 rounded ml-[3.2rem]" />
        </div>
        <p className="lg:max-w-[97%] md:max-w-[97%] max-w-full mt-2 text-xl font-medium ">
          At Trivela, we&apos;re passionate about bringing you stylish and
          affordable fashion that fits your everyday lifestyle. Born from a love
          for clean designs and quality materials, we set out to create pieces
          that you&apos;ll reach for over and over again. Whether you&apos;re
          chasing your dreams or just kicking back, Trivela has your look
          covered.
        </p>
      </div>

      <div className="flex gap-8 mx-[5%] mt-16 lg:flex-row flex-col justify-center items-center">
        <RatingCard
          avatar={face.src}
          name="Emma Parker"
          commentTitle="Reliable"
          comment="Delivery was on point—exactly when I expected it, packaged securely, and in perfect condition, making the whole process dependable."
          title="Sales Rep."
        />
        <RatingCard
          avatar={reva.src}
          name="James Ravesh"
          commentTitle="Simple"
          comment="From discovering products to completing my purchase, the entire shopping process felt effortless, with clear steps and no distractions."
          title="CEO Sally"
        />
        <RatingCard
          avatar={finest.src}
          name="Catherine Low"
          commentTitle="Seamless"
          comment="From browsing to checkout, the whole process felt incredibly smooth. It’s like the app knew exactly what I needed next."
          title="Co-lead Leadr"
        />
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

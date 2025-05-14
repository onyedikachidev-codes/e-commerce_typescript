"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

import face from "@/public/face.jpg";
import reva from "@/public/reva.jpg";
import Leadr from "@/public/Leadr.jpg";
import Star from "./Star";

export default function RatingCard() {
  const ratingSliderData = [
    {
      id: 1,
      name: "Steven Donatus",
      review:
        "I've had a really positive experience shopping on this website. It's so easy to navigate, and the search function actually works! I've placed a few orders now, and the whole process, from browsing to checkout, has been smooth and hassle-free. Plus, their customer service is responsive and helpful when I had a question about shipping. Definitely becoming one of my go-to online stores.",
      jobTitle: "Technical Director, Leadr",
      imgSrc: Leadr,
    },
    {
      id: 2,
      name: "Victoria Marcus",
      review:
        "What I appreciate most about this site is the variety of products they offer. It feels like they've really curated a thoughtful selection, and I often find unique items I wouldn't see on other big e-commerce platforms. The descriptions are also really helpful in making informed decisions. It's a pleasure to browse their categories and discover new things.",
      jobTitle: "Chief Executive Officer",
      imgSrc: reva,
    },
    {
      id: 3,
      name: "Catherine Ballard",
      review:
        "I've ordered from this website a couple of times now, and I've been consistently impressed with their reliability. My orders have always arrived on time and well-packaged. You can tell they care about the customer experience. It's refreshing to shop online and feel confident that you'll receive what you ordered without any issues. I highly recommend giving them a try.",
      jobTitle: "Jewelry Vendor, Coutures Inc.",
      imgSrc: face,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Add cloned first slide at the end
  const slides = [...ratingSliderData, ratingSliderData[0]];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => prev + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentSlide === slides.length - 1) {
      // At cloned slide (fake 4th), reset without transition
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentSlide(0);
      }, 700); // Wait for transition to finish
    } else {
      setIsTransitioning(true);
    }
  }, [currentSlide]);

  return (
    <div className="w-full overflow-hidden flex justify-center">
      <div
        ref={sliderRef}
        className={`flex ${
          isTransitioning ? "transition-transform duration-700 ease-in-out" : ""
        }`}
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
          width: `${slides.length * 100}%`,
        }}
      >
        {slides.map((slide, i) => (
          <div key={i} className="flex-shrink-0 w-full flex justify-center ">
            <div className="relative flex flex-col items-center w-full max-w-md px-4 pt-20">
              <div className="absolute top-3 z-10">
                <div className="relative w-32 h-32 rounded-full border-4 border-white shadow-md overflow-hidden">
                  <Image
                    src={slide.imgSrc}
                    alt={slide.name}
                    fill
                    className="object-cover object-[center_20%] rounded-full"
                  />
                </div>
              </div>

              <div className="bg-white shadow-lg rounded-xl p-6 sm:p-8 pt-20 sm:pt-20 text-center w-[80%] xmd:w-md sm:w-xl lg:w-2xl">
                <p className="italic text-gray-600">{slide.review}</p>
                <h3 className="mt-6 font-semibold text-lg text-gray-800">
                  {slide.name}
                </h3>
                <div className="flex justify-center mt-2">
                  <Star />
                </div>
                <p className="text-base text-gray-500 font-semibold mt-2">
                  {slide.jobTitle}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

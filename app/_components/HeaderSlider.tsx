"use client";

import React, { useEffect, useState } from "react";
import header_macbook_image from "@/public/header_macbook_image.png";
import header_playstation_image from "@/public/header_playstation_image.png";
import arrow_icon from "@/public/arrow_icon.svg";
import Image from "next/image";

export default function HeaderSlider() {
  const sliderData = [
    {
      id: 1,
      title: "Power Meets Elegance - Apple MacBook Pro is Here for you!",
      offer: "Limited Time Offer 30% Off",
      buttonText1: "Buy now",
      buttonText2: "Find more",
      imgSrc: header_macbook_image,
    },
    {
      id: 2,
      title: "Next-Level Gaming Starts Here - Discover PlayStation 5 Today!",
      offer: "Hurry up only few lefts!",
      buttonText1: "Buy Now",
      buttonText2: "Find more",
      imgSrc: header_playstation_image,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [sliderData.length]);

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="overflow-hidden relative w-full lg:w-[90%] mx-5 lg:mx-16">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {sliderData.map((slide, index) => (
          <div
            key={slide.id}
            className="flex flex-col-reverse md:flex-row items-center justify-between bg-white border border-[#EAE8E3] shadow-lg py-8 md:px-14 px-5 mt-6 rounded-xl min-w-full"
          >
            <div className="md:pl-8 mt-10 md:mt-0">
              <p className="md:text-base text-[#00B259] font-medium pb-1 bg-[#A7F133]/10 inline-block px-3 py-1 rounded-full">
                {slide.offer}
              </p>
              <h1 className="max-w-lg md:text-[40px] md:leading-[48px] text-2xl font-semibold text-[#005C34] mt-3">
                {slide.title}
              </h1>
              <div className="flex items-center mt-4 md:mt-6">
                <button className="md:px-10 px-7 md:py-2.5 py-2 bg-gradient-to-r from-[#00B259] to-[#009246] hover:from-[#009246] hover:to-[#005C34] rounded-full text-white font-medium transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105">
                  {slide.buttonText1}
                </button>
                <button className="group flex items-center gap-2 px-6 py-2.5 font-medium text-[#005C34] hover:text-[#00B259] transition-colors duration-300">
                  {slide.buttonText2}
                  <Image
                    className="group-hover:translate-x-1 transition-transform duration-300"
                    src={arrow_icon}
                    alt="arrow_icon"
                  />
                </button>
              </div>
            </div>
            <div className="flex items-center flex-1 justify-center">
              <Image
                className="md:w-72 w-48 drop-shadow-lg"
                src={slide.imgSrc}
                alt={`Slide ${index + 1}`}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-2 mt-8">
        {sliderData.map((_, index) => (
          <div
            key={index}
            onClick={() => handleSlideChange(index)}
            className={`h-2 w-2 rounded-full cursor-pointer transition-all duration-300 ${
              currentSlide === index
                ? "bg-gradient-to-r from-[#00B259] to-[#009246] transform scale-125"
                : "bg-[#EAE8E3] hover:bg-[#00B259]/30"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}

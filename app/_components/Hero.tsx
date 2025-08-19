"use client";

import React, { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// Define the type for each carousel item
interface CarouselItem {
  imageUrl: string;
  title: string;
  subtext?: string;
  cta: string;
  ctaLink: string;
}

// Example items (replace with your real data)
const carouselItems: CarouselItem[] = [
  {
    imageUrl: "/model.jpg",
    title: "Fashion Essentials",
    subtext: "Trendy clothing modeled with style and confidence",
    cta: "Shop Now",
    ctaLink: "/products",
  },
  {
    imageUrl: "/ceo-img.jpg",
    title: "Seamless Online Shopping",
    subtext: "Order your favorite outfits directly from your device",
    cta: "Shop Now",
    ctaLink: "/products",
  },
  {
    imageUrl: "/apimage1.jpg",
    title: "Fast & Reliable Delivery",
    subtext: "Your fashion essentials delivered straight to your door",
    cta: "Shop Now",
    ctaLink: "/products",
  },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Memoize the handleNext function to prevent re-creation on re-renders
  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
  }, []);

  // Set up the timer for the auto-playing carousel
  useEffect(() => {
    const timer = setInterval(handleNext, 5000); // Change slide every 5 seconds
    return () => clearInterval(timer); // Clean up the timer
  }, [handleNext]);

  const currentItem = carouselItems[currentIndex];

  return (
    <section className="bg-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Column 1: Image Carousel */}
          <div className="relative w-full h-80 md:h-96 lg:h-[500px] overflow-hidden">
            <AnimatePresence initial={false}>
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={currentItem.imageUrl}
                  alt={currentItem.title}
                  fill
                  className="object-cover"
                  priority={currentIndex === 0} // Optimize loading for the first image
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Column 2: Text Content & Controls */}
          <div className="flex flex-col justify-center text-left h-full">
            <div className="relative min-h-[280px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <h1 className="max-w-[90%] text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-[#005C34]">
                    {currentItem.title}
                  </h1>

                  <p className="mt-7 max-w-xl text-lg md:text-xl text-gray-600">
                    {currentItem.subtext}
                  </p>
                  <a
                    href={currentItem.ctaLink}
                    className="mt-8 inline-flex items-center text-black text-lg font-bold group"
                  >
                    <span className="mr-1">{currentItem.cta}</span>
                    <Image
                      src="/arrow-right.svg"
                      width={40}
                      height={40}
                      alt="Arrow right"
                      className="transition-transform duration-300 ease-out group-hover:translate-x-2"
                    />
                  </a>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Rectangular Indicators */}
            <div className="mt-18 flex space-x-2">
              {carouselItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-1.5 rounded-sm transition-all duration-500 ease-out ${
                    currentIndex === index
                      ? "bg-[#00B259] w-12"
                      : "bg-gray-300 w-6 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

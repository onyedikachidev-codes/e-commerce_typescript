"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 px-10 sm:px-16 sm:py-10 py-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-start gap-16">
        <div className="sm:max-w-[50%] lg:max-w-[57%] max-w-full">
          <h2 className="text-xl font-semibold mb-2 text-black text-center sm:text-left">
            Trivela Group&apos;s
          </h2>
          <p className="text-sm font-medium text-gray-600">
            A premier online shopping destination committed to offering
            customers around the globe a seamless experience, top-quality
            products, and trusted service—bringing the world of retail right to
            your fingertips.
          </p>
        </div>

        <div className="flex items-center justify-between w-full">
          <div className="">
            <h3 className="text-lg font-semibold mb-2">Menu</h3>
            <ul className="space-y-1.5 text-sm font-medium">
              <li>
                <Link href="/products">Shop</Link>
              </li>
              <li>
                <Link href="/#best">New Arrivals</Link>
              </li>
              <li>
                <Link href="/#about">About Trivela</Link>
              </li>
            </ul>
          </div>

          <div className="">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-1.5 text-sm font-medium">
              <li>
                <Link href="/">FAQ&apos;s</Link>
              </li>
              <li>
                <Link href="/">Privacy Policy</Link>
              </li>
              <li>
                <Link href="mailto:nwangumabimma@gmail.com">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <hr className="my-6 border-gray-200" />

      <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-medium">
        <p>&copy;2025 Trivela Inc. All Rights Reserved</p>
        <Link
          href="/privacy-policy"
          className="mt-2 md:mt-0 hover:underline font-medium"
        >
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
}

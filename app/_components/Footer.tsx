"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  FaFacebook,
  FaLinkedin,
  FaYoutube,
  FaInstagram,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";
import Logo from "./Logo";

const Footer: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
  };

  return (
    <footer className="bg-black px-4 pt-16 pb-8 text-gray-300 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Main Grid */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="space-y-5">
            <Link href="/" aria-label="Home">
              <Logo />
            </Link>
            <p className="font-semibold mt-2 text-[#00B259] text-lg">
              Shop Smart, Live Better
            </p>
            <p className="text-sm leading-relaxed text-gray-400">
              Trivela brings together fashion and technology — offering stylish
              clothing, premium accessories, and cutting-edge electronics. We
              create products that empower self-expression, elevate everyday
              living, and keep you connected to what matters most.
            </p>
            <div className="flex space-x-4 pt-2">
              <Link
                href="https://x.com/Mannie799"
                aria-label="Twitter"
                className="hover:text-[#00B259] transition-colors"
              >
                <FaTwitter className="h-7 w-7" />
              </Link>
              <Link
                href="https://github.com/onyedikachidev-codes"
                aria-label="GitHub"
                className="hover:text-[#00B259] transition-colors"
              >
                <FaGithub className="h-6 w-6" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/onyedikachi-nwanguma/"
                aria-label="LinkedIn"
                className="hover:text-[#00B259] transition-colors"
              >
                <FaLinkedin className="h-6 w-6" />
              </Link>
              <Link
                href="#"
                aria-label="Facebook"
                className="hover:text-[#00B259] transition-colors"
              >
                <FaFacebook className="h-6 w-6" />
              </Link>
            </div>
          </div>

          {/* Collections */}
          <div>
            <h3 className="font-semibold text-white tracking-wide uppercase text-sm">
              Collections
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {[
                "Men’s Wear",
                "Women’s Wear",
                "Kids’ Clothing",
                "Accessories",
                "Seasonal Trends",
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    href="#"
                    className="hover:text-[#00B259] transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className="font-semibold text-white tracking-wide uppercase text-sm">
              Customer Care
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {[
                "Shipping & Delivery",
                "Returns & Exchanges",
                "Size Guide",
                "Track Your Order",
                "FAQs",
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    href="#"
                    className="hover:text-[#00B259] transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-white tracking-wide uppercase text-sm">
              Stay Informed
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              Subscribe to receive updates on new safety solutions, compliance
              changes, and industry insights.
            </p>
            <form onSubmit={handleSubmit} className="mt-5">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your professional email"
                  className="w-full rounded-md bg-white py-3 pl-4 pr-12 text-sm text-black placeholder-gray-400 focus:outline-0 focus:ring-2 focus:ring-[#00B259]"
                  required
                />
                <button
                  type="submit"
                  className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-400 hover:text-[#00B259] transition-colors"
                >
                  <ArrowRight size={20} />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500 space-y-4 md:space-y-0">
          <p>&copy; 2025 TRIVELA INC. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="#" className="hover:text-[#00B259] transition-colors">
              Terms
            </Link>
            <Link href="#" className="hover:text-[#00B259] transition-colors">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

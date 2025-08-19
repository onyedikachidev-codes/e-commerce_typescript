"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FaFacebook, FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa";
import Logo from "./Logo";

const Footer: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
  };

  return (
    <footer className="bg-black px-4 pt-16 pb-8 text-gray-300 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/">
              <Logo />
            </Link>
            <p className="font-semibold mt-4 text-[#00B259]">
              Protéger. Équiper. Valoriser.
            </p>
            <p className="text-sm">
              APB Safety delivers complete professional clothing and PPE
              solutions for large companies, ensuring employee safety while
              enhancing brand image through innovative equipment management.
            </p>
            <div className="flex space-x-2">
              <Link href="#" aria-label="Facebook">
                <FaFacebook className="transition-colors h-7 w-7 hover:text-[#00B259]" />
              </Link>
              <Link href="#" aria-label="YouTube">
                <FaYoutube className="transition-colors h-8 w-8 hover:text-[#00B259]" />
              </Link>
              <Link href="#" aria-label="Instagram">
                <FaInstagram className="transition-colors h-7 w-7 hover:text-[#00B259]" />
              </Link>
              <Link href="#" aria-label="LinkedIn">
                <FaLinkedin className="transition-colors h-7 w-7 hover:text-[#00B259]" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white">Our Solutions</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-[#00B259]">
                  Professional Workwear
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#00B259]">
                  Personal Protective Equipment
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#00B259]">
                  Corporate Uniforms
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#00B259]">
                  EMIL Digital Platform
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#00B259]">
                  Large Account Services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white">Support</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-[#00B259]">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#00B259]">
                  Distribution Network
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#00B259]">
                  Technical Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#00B259]">
                  Compliance Standards
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#00B259]">
                  Client Portal
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#00B259]">
                  Legal Information
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#00B259]">
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#00B259]">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white">Stay Informed</h3>
            <p className="mt-4 text-sm">
              Subscribe to receive updates on new safety solutions, compliance
              changes, and industry insights.
            </p>
            <div className="mt-4">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your professional email"
                  className="w-full rounded-md focus:outline-0 focus:ring-2 focus:ring-[#00B259] bg-white py-2.5 pl-4 pr-10 text-black placeholder-gray-400"
                />

                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 hover:text-[#00B259] transition-colors"
                >
                  <ArrowRight size={20} className="text-gray-400" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-sm text-gray-500">
            &copy; 2025 APB SAFETY. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

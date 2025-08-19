"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
  subItems?: Array<{
    label: string;
    href: string;
    description?: string;
  }>;
}

const navigationData: NavItem[] = [
  {
    label: "SHOP",
    href: "/products",
    hasDropdown: false,
  },
  {
    label: "NEW ARRIVALS",
    href: "/#best",
    hasDropdown: false,
  },
  {
    label: "DELIVERY",
    href: "/#",
    hasDropdown: true,
    subItems: [
      {
        label: "Same Day Delivery",
        href: "/#",
        description: "Express delivery within 24 hours for urgent orders",
      },
      {
        label: "Scheduled Delivery",
        href: "/#",
        description: "Plan deliveries to match your operational timeline",
      },
      {
        label: "Bulk Distribution",
        href: "/#",
        description: "Multi-location delivery for enterprise accounts",
      },
      {
        label: "White Glove Service",
        href: "/#",
        description: "Premium setup and installation at your location",
      },
    ],
  },

  {
    label: "ABOUT",
    href: "/about",
    hasDropdown: true,
    subItems: [
      {
        label: "Our Mission",
        href: "/about/mission",
        description: "Safety, compliance & brand enhancement",
      },
      {
        label: "Innovation",
        href: "/about/innovation",
        description: "Continuous evolution in workplace solutions",
      },
      {
        label: "Sustainability",
        href: "/about/sustainability",
        description: "Responsible materials & supply chains",
      },
      {
        label: "Contact",
        href: "/about/contact",
        description: "Get in touch with our team",
      },
    ],
  },
  {
    label: "CONTACT US",
    href: "mailto:nwangumabimma@gmail.com",
    hasDropdown: false,
  },
];

const NavigationHeader: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleMouseEnter = (label: string) => {
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <nav className="bg-[#005C34] text-white border-b border-[#00B259] mt-18 hidden lg:block">
      <div className="container mx-auto px-8">
        <ul className="flex items-center justify-start space-x-8 lg:space-x-12">
          {navigationData.map((item) => (
            <li
              key={item.label}
              className="relative"
              onMouseEnter={() => handleMouseEnter(item.label)}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href={item.href}
                className="flex items-center py-4 text-sm font-semibold text-white hover:text-[#A7F133] transition-colors duration-200"
              >
                <span>{item.label}</span>
                {item.hasDropdown && (
                  <ChevronDown
                    className={`ml-2 h-4 w-4 transition-transform duration-200 ${
                      activeDropdown === item.label ? "rotate-180" : ""
                    }`}
                  />
                )}
              </Link>

              {/* Enhanced Dropdown Menu */}
              {item.hasDropdown && item.subItems && (
                <div
                  className={`absolute top-full left-0 z-50 min-w-[320px] bg-white text-gray-900 shadow-xl border border-gray-200 rounded-lg transition-all duration-200 ${
                    activeDropdown === item.label
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible -translate-y-2"
                  }`}
                >
                  <ul className="py-3">
                    {item.subItems.map((subItem) => (
                      <li key={subItem.label}>
                        <Link
                          href={subItem.href}
                          className="block px-5 py-3 hover:bg-[#EAE8E3] transition-colors duration-150 group"
                        >
                          <div className="flex flex-col">
                            <span className="text-sm font-semibold text-gray-900 group-hover:text-[#00B259] transition-colors">
                              {subItem.label}
                            </span>
                            {subItem.description && (
                              <span className="text-xs text-gray-600 mt-1 leading-tight">
                                {subItem.description}
                              </span>
                            )}
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Footer for dropdowns */}
                  <div className="border-t border-gray-200 px-5 py-3 bg-[#EAE8E3] rounded-b-lg">
                    <p className="text-xs text-gray-700">
                      Need a custom solution?{" "}
                      <Link
                        href="/contact"
                        className="text-[#00B259] font-semibold hover:text-[#005C34] transition-colors"
                      >
                        Contact our team
                      </Link>
                    </p>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavigationHeader;

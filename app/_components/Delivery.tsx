import React from "react";
import Image from "next/image";
import Link from "next/link";

import delivery from "../../public/delivery.jpg";

const Delivery: React.FC = () => {
  return (
    <section className="relative pt-8">
      <div className="container mx-auto">
        <div className="relative flex min-h-[500px] w-full items-center justify-end">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={delivery}
              alt="Trivela Delivery and Logistics"
              fill
              className="object-cover"
              priority
            />
            {/* Enhanced overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          </div>

          {/* Text Content Box */}
          <div className="relative z-10 w-full p-8 text-left lg:w-1/2 lg:p-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
              <h2 className="text-3xl font-black uppercase tracking-wide text-white md:text-4xl lg:text-5xl mb-2">
                NEXT-DAY DELIVERY
              </h2>
              <div className="w-20 h-1 bg-[#00B259] mr-auto mb-6"></div>

              <p className="text-lg leading-relaxed text-white/95 mb-4">
                Trivela ensures your team stays protected with our dedicated
                logistics network. From multi-site distribution to emergency
                restocking, we deliver when you need it most.
              </p>

              <p className="text-base leading-relaxed text-white/80 mb-8">
                <strong className="text-[#A7F133]">800+ employees?</strong>{" "}
                Benefit from our large account services including dedicated
                stock management and streamlined procurement through our EMIL
                platform.
              </p>

              <div className="flex flex-col items-start md:items-end gap-4 sm:flex-row sm:justify-start">
                <Link
                  href="/products"
                  className="border-2 rounded-lg border-white/30 bg-transparent px-8 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-white hover:text-[#005C34] backdrop-blur-sm"
                >
                  Shop now
                </Link>
                <Link
                  href="/contact"
                  className="rounded-lg bg-[#00B259] px-8 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-[#005C34] shadow-lg hover:shadow-xl"
                >
                  Get Started Today
                </Link>
              </div>

              {/* Trust indicators */}
              <div className="mt-8 pt-6 border-t border-white/20">
                <div className="flex justify-between items-center gap-6 text-white/80 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#00B259] rounded-full"></div>
                    <span>Next-Day Delivery</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#00B259] rounded-full"></div>
                    <span>Pay on Delivery</span>
                  </div>

                  <div className="flex items-center gap-2 hidden md:block">
                    <div className="w-2 h-2 bg-[#009246] rounded-full"></div>
                    <span>Bulk Distribution</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Delivery;

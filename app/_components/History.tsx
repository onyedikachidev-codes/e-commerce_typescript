import React from "react";
import Image from "next/image";
import Link from "next/link";
import historyImg from "../../public/writing-img.jpg";

const History: React.FC = () => {
  return (
    <section className="bg-[#EAE8E3] py-12 sm:py-16 lg:py-20 px-2.5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-x-12 gap-y-10 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <Image
                src={historyImg}
                alt="Professional safety expert demonstrating APB Safety equipment and expertise"
                width={500}
                height={500}
                className="h-auto w-full object-cover rounded-lg shadow-lg"
              />
              {/* Brand accent overlay */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#00B259] rounded-lg opacity-20"></div>
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-[#005C34] rounded-lg opacity-10"></div>
            </div>
          </div>

          <div className="order-1 text-[#005C34] lg:order-2">
            <div className="mb-4">
              <span className="inline-block px-4 py-2 bg-[#A7F133] text-[#005C34] text-sm font-bold uppercase tracking-wider rounded-full">
                Est. 1995
              </span>
            </div>

            <h2 className="mb-6 text-3xl font-black uppercase tracking-wide md:text-4xl lg:text-5xl">
              Nearly 30 Years of Excellence
            </h2>

            <div className="w-20 h-1 bg-[#00B259] mb-8"></div>

            <div className="space-y-6 text-lg leading-relaxed text-gray-700">
              <p>
                <strong className="text-[#005C34]">Since 1995</strong>, Trivela
                has established itself as the trusted partner for large
                enterprises across Africa&apos;s most demanding industries. What
                started as a vision to revolutionize workplace safety has
                evolved into a comprehensive solution provider for organizations
                with 800+ employees.
              </p>

              <div className="">
                <Link
                  href="/about"
                  className="inline-block px-6 py-3 bg-[#00B259] text-white text-sm font-bold uppercase tracking-wider rounded-lg transition-colors duration-300 hover:bg-[#005C34]"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;

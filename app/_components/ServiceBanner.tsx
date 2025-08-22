import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { FiShield } from "react-icons/fi";
import { MdOutlineManageAccounts } from "react-icons/md";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";

const services = [
  {
    icon: <TbTruckDelivery size={40} />,
    title: "Next-Day Delivery",
    description: "Guaranteed delivery within 24 hours for large accounts",
    color: "text-[#00B259]",
    bgColor: "bg-[#00B259]/10",
  },
  {
    icon: <FiShield size={40} />,
    title: "Compliance Guaranteed",
    description: "All products meet industry safety standards",
    color: "text-[#005C34]",
    bgColor: "bg-[#005C34]/10",
  },
  {
    icon: <MdOutlineManageAccounts size={40} />,
    title: "ONLINE Platform",
    description: "Digital management for multi-site distribution",
    color: "text-[#A7F133]",
    bgColor: "bg-[#A7F133]/10",
  },
  {
    icon: <HiOutlineClipboardDocumentList size={40} />,
    title: "Dedicated Support",
    description: "Account management for 800+ employee organizations",
    color: "text-[#009246]",
    bgColor: "bg-[#009246]/10",
  },
];

const ServiceBanner: React.FC = () => {
  return (
    <section className="bg-[#f5f1e8] py-12 px-2.5 border-t border-[#00B259]/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl font-black text-[#005C34] uppercase tracking-wide mb-2">
            Premium Lifestyle Solutions
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Stylish clothing, modern accessories, and smart electronics —
            thoughtfully designed to keep you looking sharp, connected, and
            inspired.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-sm border border-white/50 hover:shadow-md transition-all duration-300 group"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                {/* Icon with background */}
                <div
                  className={`${service.bgColor} p-4 rounded-full transition-transform group-hover:scale-110`}
                >
                  <div className={service.color}>{service.icon}</div>
                </div>

                <div>
                  <h3 className="font-bold text-[#005C34] text-lg mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceBanner;

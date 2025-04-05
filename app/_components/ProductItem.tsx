import Image from "next/image";
import React from "react";
import { CiStar } from "react-icons/ci";

interface ProductProps {
  imageSrc: string;
  altText: string;
  title: string;
  rating: number;
  price: number;
}

export default function ProductItem({
  imageSrc,
  altText,
  title,
  rating,
  price,
}: ProductProps) {
  return (
    <div className="relative w-full h-48">
      <div>
        <Image
          src={imageSrc}
          alt={altText}
          layout="fill"
          objectFit="cover"
          className="transition-opacity duration-200"
        />
      </div>

      <div className="p-4 w-full">
        <h3 className="text-gray-800 text-lg font-semibold mb-1">{title}</h3>
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center">
            <CiStar className="h-5 w-5 text-yellow-500 mr-1" />
            <span className="text-gray-600 text-sm">{rating}</span>
          </div>
          <span className="text-indigo-600 text-xl font-bold">
            ${price.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
}

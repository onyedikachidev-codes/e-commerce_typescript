import Image from "next/image";
import React from "react";
import StarRating from "./StarRating";

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
    <div className="relative flex flex-col items-start p-3 transition-all cursor-pointer hover:scale-[102%] duration-200 ease-in-out rounded-md shadow-md hover:shadow-lg">
      <div className="relative w-full h-80">
        <Image
          src={imageSrc}
          alt={altText}
          layout="fill"
          style={{ objectFit: "cover" }}
          className="transition-opacity duration-200"
        />
      </div>

      <div className="py-1.5 w-full">
        <div className="flex justify-between items-center">
          <h3 className="text-gray-800 text-lg font-semibold mb-1">{title}</h3>
          <h4 className="text-gray-800 text-xl font-bold">
            ${price.toFixed(2)}
          </h4>
        </div>

        <div className="w-full border-[1.5px] border-t border-gray-300 my-2"></div>

        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2.5">
            <StarRating rating={rating} />
            <span className="text-gray-600 text-sm px-1 border-l border-r">
              {rating}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

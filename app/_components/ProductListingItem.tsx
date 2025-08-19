import React from "react";

import { ProductListingProps } from "../_models/item";

import { useDispatch } from "react-redux";
import { addItems } from "../store/carts";
import StarRating from "./StarRating";
import Image from "next/image";

export default function ProductListingItem({
  id,
  image,
  altText = "image",
  title,
  price,
  rating,
}: ProductListingProps): React.JSX.Element {
  const dispatch = useDispatch();
  const { count, rate } = rating;

  function handleAddToCart() {
    const newItem = {
      productId: id || 0,
      title,
      image,
      quantity: 1,
      unitPrice: price,
      totalPrice: price * 1,
    };

    dispatch(addItems(newItem));
  }
  return (
    <div className="relative group flex flex-col items-start bg-white rounded-2xl border border-[#EAE8E3] hover:border-[#00B259]/30 transition-all duration-300 shadow-sm hover:shadow-lg p-4">
      <div className="relative w-full h-64 rounded-xl bg-gradient-to-br from-[#EAE8E3]/20 to-white overflow-hidden">
        <Image
          src={image}
          alt={altText}
          fill
          style={{ objectFit: "cover" }}
          className="h-[90%] object-[center_7%] transition-all cursor-pointer hover:scale-[102%] duration-200 ease-in-out rounded-lg"
        />

        {/* Subtle overlay gradient for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent rounded-lg" />
      </div>

      <div className="py-1.5 w-full flex flex-col justify-end">
        <div className="flex flex-col items-start justify-between">
          <div className="w-full flex flex-col">
            <h3 className="text-[#005C34] text-lg font-semibold mt-2.5 group-hover:text-[#00B259] transition-colors duration-200">
              {title.slice(0, 18)}
              <span className="text-gray-400 text-lg">...</span>
            </h3>

            <div className="flex items-center gap-1 mb-2.5">
              <p className="text-sm font-medium pr-1 text-[#005C34]">
                {rate.toFixed(1)}
              </p>
              <StarRating rating={rate} />
              <span className="text-gray-500 text-sm px-1">({count})</span>
            </div>

            <div className="w-full flex items-center justify-between">
              <h4 className="text-[#005C34] text-lg font-bold">
                ${price.toFixed(2)}
              </h4>

              <button
                className="relative border-2 border-[#00B259] bg-white hover:bg-[#00B259] text-[#00B259] hover:text-white rounded-full py-2 px-4 text-xs font-medium cursor-pointer duration-300 transition-all transform hover:scale-105 hover:shadow-md active:scale-95"
                onClick={handleAddToCart}
              >
                <span className="relative z-10">Add to cart</span>

                {/* Subtle background animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#00B259] to-[#009246] rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

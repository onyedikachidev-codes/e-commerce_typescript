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
    <div className="relative group flex flex-col items-start">
      <div className="relative w-full h-64 rounded-2xl bg-white">
        <Image
          src={image}
          alt={altText}
          fill
          style={{ objectFit: "cover" }}
          className="h-[90%] object-[center_7%] transition-all cursor-pointer hover:scale-[102%] duration-200 ease-in-out rounded-md shadow-md hover:shadow-lg"
        />
      </div>

      <div className="py-1.5 w-full  flex flex-col justify-end">
        <div className="flex flex-col items-start justify-between">
          <div className="w-full flex flex-col">
            <h3 className="text-gray-800 text-lg font-semibold mt-2.5">
              {title.slice(0, 20)}
              <span className="text-gray-400 text-lg">...</span>
            </h3>

            <div className="flex items-center gap-1 mb-2.5">
              <p className="text-sm font-medium pr-1">{rate.toFixed(1)}</p>
              <StarRating rating={rate} />
              <span className="text-gray-600 text-sm px-1">({count})</span>
            </div>

            <div className="w-full flex items-center justify-between">
              <h4 className="text-gray-800 text-lg font-semibold">
                ${price.toFixed(2)}
              </h4>

              <button
                className="border border-blue-500 rounded-full py-2 px-3 text-xs cursor-pointer hover:bg-blue-200 duration-200 transition"
                onClick={handleAddToCart}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

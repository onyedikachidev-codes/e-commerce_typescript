import React from "react";

import { useDispatch } from "react-redux";
import {
  decreaseItemQuantity,
  deleteItems,
  increaseItemQuantity,
} from "@/app/store/carts";

type CartItemMobileProps = {
  productId: number;
  name: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  image?: string;
};

export default function CartItemMobile({
  productId,
  name,
  quantity,
  unitPrice,
  image,
}: CartItemMobileProps) {
  const dispatch = useDispatch();
  return (
    <div
      key={productId}
      className="flex flex-col bg-white p-4 rounded-md shadow-md"
    >
      {/* Product image and details */}
      <div className="flex gap-4">
        <img src={image} alt={name} className="w-24 h-24 object-contain" />
        <div className="flex-1">
          <h2 className="text-base font-semibold">{name}</h2>
          <p className="text-sm text-gray-500 mt-2">Price: ${unitPrice}</p>
        </div>
      </div>

      {/* Bottom actions */}
      <div className="flex justify-between items-center mt-4">
        {/* Remove */}
        <button
          onClick={() => dispatch(deleteItems(productId))}
          className="flex items-center gap-1 text-blue-500 text-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
          Remove
        </button>

        {/* Quantity control */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => dispatch(decreaseItemQuantity(productId))}
            disabled={quantity <= 1}
            className="w-8 h-8 bg-blue-400 text-white rounded-md flex items-center justify-center text-xl"
          >
            -
          </button>
          <span>{quantity}</span>
          <button
            onClick={() => dispatch(increaseItemQuantity(productId))}
            className="w-8 h-8 bg-blue-400 text-white rounded-md flex items-center justify-center text-xl"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

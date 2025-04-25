import React from "react";

import DeleteItem from "./DeleteItem";
import { useDispatch } from "react-redux";
import { decreaseItemQuantity, increaseItemQuantity } from "@/app/store/carts";

type CartItemProps = {
  productId: number;
  name: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  image?: string;
};

export default function CartItem({
  productId,
  name,
  quantity,
  unitPrice,
  totalPrice,
  image,
}: CartItemProps) {
  const dispatch = useDispatch();
  return (
    <tr className="border-b border-gray-200 hover:bg-gray-100">
      <td className="py-3 px-6 text-left flex gap-2.5 items-center">
        <img src={image} alt="product_image" className="h-14 w-14" />
        <h2>{name}</h2>
      </td>
      <td className="py-3 px-7 text-left">{unitPrice.toFixed(2)}</td>
      <td className="py-3 px-4 text-left">
        <div className="flex items-center gap-1 md:gap-3 text-gray-600 hover:text-gray-900">
          <button
            onClick={() => dispatch(decreaseItemQuantity(productId))}
            disabled={quantity <= 1}
            className={
              quantity <= 1
                ? "opacity-50 cursor-not-allowed text-lg px-3 py-1"
                : "px-3 py-1 text-gray-600 hover:bg-gray-100 cursor-pointer text-lg"
            }
          >
            -
          </button>
          {quantity}
          <button
            className="px-3 py-1 text-gray-600 cursor-pointer hover:bg-gray-100 text-lg"
            onClick={() => dispatch(increaseItemQuantity(productId))}
          >
            +
          </button>
        </div>
      </td>
      <td className="py-3 px-8 text-left">{totalPrice.toFixed(2)}</td>
      <td className="py-3 px-6 text-left">
        <DeleteItem productId={productId} />
      </td>
    </tr>
  );
}

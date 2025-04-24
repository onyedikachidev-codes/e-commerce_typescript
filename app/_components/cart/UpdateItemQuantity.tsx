import React from "react";
import { useDispatch } from "react-redux";

interface UpdateItemProps {
  productId: number;
  children: React.ReactNode;
}

import { decreaseItemQuantity, increaseItemQuantity } from "@/app/store/carts";

export default function UpdateItemQuantity({
  productId,
  children,
}: UpdateItemProps) {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-1 md:gap-3 text-gray-600 hover:text-gray-900">
      <button
        className="px-3 py-1 text-gray-600 hover:bg-gray-100"
        onClick={() => dispatch(decreaseItemQuantity(productId))}
      >
        -
      </button>
      {children}
      <button  className="px-3 py-1 text-gray-600 hover:bg-gray-100" onClick={() => dispatch(increaseItemQuantity(productId))}>
        +
      </button>
    </div>
  );
}

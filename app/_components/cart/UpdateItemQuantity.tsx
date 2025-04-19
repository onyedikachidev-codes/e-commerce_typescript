import React from "react";
import { useDispatch } from "react-redux";

interface UpdateItemProps {
  productId: number;
}

import { decreaseItemQuantity, increaseItemQuantity } from "@/app/store/carts";

export default function UpdateItemQuantity({ productId }: UpdateItemProps) {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-1 md:gap-3">
      <button onClick={() => dispatch(decreaseItemQuantity(productId))}>
        -
      </button>
      <button onClick={() => dispatch(increaseItemQuantity(productId))}>
        +
      </button>
    </div>
  );
}

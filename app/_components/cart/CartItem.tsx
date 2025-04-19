import React from "react";
import UpdateItemQuantity from "./UpdateItemQuantity";
import DeleteItem from "./DeleteItem";

type CartItemProps = {
  item: {
    productId: number;
    name: string;
    quantity: number;
    totalPrice: number;
  };
};

export default function CartItem({ item }: CartItemProps) {
  const { productId, name, quantity, totalPrice } = item;
  console.log(productId);

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{totalPrice}</p>
        <UpdateItemQuantity productId={productId} />
        <DeleteItem productId={productId} />
      </div>
    </li>
  );
}

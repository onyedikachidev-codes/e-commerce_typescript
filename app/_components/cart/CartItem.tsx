import React from "react";
import UpdateItemQuantity from "./UpdateItemQuantity";
import DeleteItem from "./DeleteItem";

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
  return (
    <tr className="border-b border-gray-200 hover:bg-gray-100">
      <td className="py-3 px-6 text-left flex gap-2.5 items-center">
        <img src={image} alt="product_image" className="h-14 w-14" />
        <h2>{name}</h2>
      </td>
      <td className="py-3 px-7 text-left">{unitPrice}</td>
      <td className="py-3 px-4 text-left">
        <UpdateItemQuantity productId={productId}>
          <span>{quantity}</span>
        </UpdateItemQuantity>
      </td>
      <td className="py-3 px-8 text-left">{totalPrice}</td>
      <td className="py-3 px-6 text-left">
        <DeleteItem productId={productId} />
      </td>
    </tr>
  );
}

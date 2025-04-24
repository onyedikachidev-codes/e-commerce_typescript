import { deleteItems } from "@/app/store/carts";
import React from "react";
import { useDispatch } from "react-redux";

interface DeleteItemProps {
  productId: number;
}

export default function DeleteItem({ productId }: DeleteItemProps) {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => dispatch(deleteItems(productId))}
      className="text-red-500 hover:text-red-700"
    >
      Delete
    </button>
  );
}

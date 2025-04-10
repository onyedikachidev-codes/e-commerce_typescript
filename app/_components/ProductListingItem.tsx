import React from "react";
import { CiStar } from "react-icons/ci";
import { ProductListingProps } from "../models/item";
import Link from "next/link";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { addItems } from "../store/carts";

export default function ProductListingItem({
  id,
  image,
  altText = "image",
  title,
  price,
  rating,
}: ProductListingProps): React.JSX.Element {
  const dispatch = useDispatch();
  const { count } = rating;

  function handleAddToCart() {
    const newItem = {
      cartId: id,
      title,
      quantity: 1,
      unitPrice: price,
      totalPrice: price * 1,
    };
    dispatch(addItems(newItem));
  }
  return (
    <Link
      href={`/products/${id}`}
      className="relative flex flex-col items-start p-3 transition-all cursor-pointer hover:scale-[102%] duration-200 ease-in-out rounded-md shadow-md hover:shadow-lg"
    >
      <div className="relative w-full h-80">
        <img
          src={image}
          alt={altText}
          style={{
            objectFit: "cover",
          }}
          className="transition-opacity duration-200"
        />
      </div>

      <div className="py-1.5 w-full min-h-36 flex flex-col justify-between">
        <h3 className="text-gray-800 text-lg font-semibold mb-1">{title}</h3>
        <div className="flex flex-col items-start">
          <h4 className="text-gray-800 text-xl font-bold">
            ${price.toFixed(2)}
          </h4>
          <div className="flex gap-1">
            <div className="flex">
              <CiStar className="h-5 w-5 text-yellow-500" />
              <CiStar className="h-5 w-5 text-yellow-500" />
              <CiStar className="h-5 w-5 text-yellow-500" />
              <CiStar className="h-5 w-5 text-yellow-500" />
              <CiStar className="h-5 w-5 text-yellow-500" />
            </div>
            <span className="text-gray-600 text-sm px-1">({count})</span>
          </div>
        </div>
        <Button onClick={handleAddToCart} type="cta">
          Shop Now
        </Button>
      </div>
    </Link>
  );
}

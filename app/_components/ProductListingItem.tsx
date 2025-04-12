import React from "react";
import { CiStar } from "react-icons/ci";
import { ProductListingProps } from "../_models/item";
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
      className="relative group flex flex-col gap-10 justify-between items-start p-3 transition-all cursor-pointer hover:scale-[102%] duration-200 ease-in-out rounded-md shadow-md hover:shadow-lg"
    >
      <div className="relative w-full h-64">
        <img
          src={image}
          alt={altText}
          style={{
            objectFit: "cover",
          }}
          className="transition-opacity duration-200 h-[90%]"
        />
        <h3 className="text-gray-800 text-lg font-semibold mt-5">
          {title.slice(0, 38)}
        </h3>
      </div>

      <div className="py-1.5 w-full min-h-36 flex flex-col justify-end">
        <div className="flex flex-col items-start justify-between">
          <div className="flex flex-col ">
            <h4 className="text-gray-800 text-xl font-bold">
              ${price.toFixed(2)}
            </h4>
            <div className="flex gap-1 mb-2.5">
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
        </div>
        <Button type="cart" onClick={handleAddToCart}>
          Add to cart
        </Button>
      </div>
    </Link>
  );
}

import React from "react";
import axios from "axios";
import { ProductListingProps } from "../models/item";
import ProductListingItem from "../_components/ProductListingItem";
import Header from "../_components/Header";
import { IoIosArrowDown } from "react-icons/io";

import { Montserrat } from "next/font/google";

const mons = Montserrat({
  subsets: ["latin"],
  variable: "--font-mons",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export default async function Page() {
  const res = await axios.get("https://fakestoreapi.com/products");
  const products: ProductListingProps[] = res.data;

  const totalItems: number = products.length;
  return (
    <>
      <Header />
      <div
        className={`${mons.className} flex justify-between items-center border-b border-gray-300 pb-4 mt-24 mx-7 text-xl font-semibold`}
      >
        <h2>
          Shop with Trivela
          <span className="font-medium text-gray-600 text-lg">
            ({totalItems} products found)
          </span>
        </h2>
        <h3 className="flex items-center">
          Sort by: Popularity <IoIosArrowDown />
        </h3>
      </div>
      <div
        className={`${mons.className} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-6 mt-6 px-20`}
      >
        {products.map((product) => (
          <ProductListingItem key={product.id} {...product} />
        ))}
      </div>
    </>
  );
}

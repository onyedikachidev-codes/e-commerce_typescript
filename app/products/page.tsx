"use client";

import React from "react";
import axios, { AxiosResponse } from "axios";
import { ProductListingProps } from "../models/item";
import ProductListingItem from "../_components/ProductListingItem";
import Header from "../_components/Header";
import { IoIosArrowDown } from "react-icons/io";

import { Montserrat } from "next/font/google";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../_components/Spinner";

const mons = Montserrat({
  subsets: ["latin"],
  variable: "--font-mons",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const fetchProducts = async (): Promise<ProductListingProps[]> => {
  const res: AxiosResponse<ProductListingProps[]> = await axios.get(
    "https://fakestoreapi.com/products"
  );

  return res.data;
};

export default function Page() {
  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useQuery<ProductListingProps[], Error>({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
  const totalItems: number = products?.length ?? 0;

  if (isLoading) return <Spinner />;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <>
      <Header />
      <div
        className={`${mons.className} flex justify-between items-center border-b border-gray-300 py-4 mt-24 mx-7 text-xl font-semibold`}
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
        {products &&
          products.map((product) => (
            <ProductListingItem key={product.id} {...product} />
          ))}
      </div>
    </>
  );
}

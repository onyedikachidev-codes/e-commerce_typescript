"use client";

import React, { useState } from "react";
import axios, { AxiosResponse } from "axios";
import { ProductListingProps } from "../_models/item";
import ProductListingItem from "../_components/ProductListingItem";
import Header from "../_components/Header";

import { Montserrat } from "next/font/google";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../_components/Spinner";
import SearchBig from "../_components/SearchBig";
import { useDebounce } from "../_hooks/useDebounce";
import { fetchSearchedProducts } from "../_lib/actions";

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
  const [value, setValue] = useState("Search products, Brands and Categories");
  const [errorText, setErrorText] = useState("");

  const debouncedSearch = useDebounce(value, 700);

  const { data: filteredProducts } = useQuery({
    queryKey: ["search", debouncedSearch],
    queryFn: () => fetchSearchedProducts(debouncedSearch),
    enabled:
      debouncedSearch.length >= 4 &&
      debouncedSearch !== "Search products, Brands and Categories",
  });

  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useQuery<ProductListingProps[], Error>({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  const totalItems =
    value === "Search products, Brands and Categories" || value.length < 4
      ? products?.length ?? 0
      : filteredProducts?.length ?? 0;

  if (isLoading) return <Spinner />;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <>
      <Header />
      <div className="mt-24 flex justify-center items-center">
        <SearchBig
          value={value}
          setValue={setValue}
          errorText={errorText}
          setErrorText={setErrorText}
        />
      </div>
      <div
        className={`${mons.className} flex justify-between items-center border-b border-gray-300 py-4  mx-7 text-xl font-semibold`}
      >
        <h2>
          Shop with Trivela
          <span className="font-medium text-gray-600 text-lg">
            (&nbsp;{totalItems} products found )
          </span>
        </h2>
        <div className="border px-2.5 py-3 rounded-lg font-normal text-sm flex gap-8 items-center cursor-pointer focus:border-blue-400">
          <p>Sort By</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5"
            />
          </svg>
        </div>
      </div>
      <div
        className={`${mons.className} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-6 mt-6 px-20`}
      >
        {(value !== "Search products, Brands and Categories" &&
        value.length >= 4
          ? filteredProducts
          : products
        )?.map((product) => (
          <ProductListingItem key={product.id} {...product} />
        ))}
      </div>
    </>
  );
}

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
import Sort from "../_components/Sort";
import { sortOptions } from "../_lib/constants";

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
  const isSearching =
    value !== "Search products, Brands and Categories" && value.length >= 4;

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
        className={`${mons.className} flex justify-between items-center border-b border-gray-300 py-4  mx-7 text-xl `}
      >
        <h2 className="font-semibold">
          Shop with Trivela
          <span className="font-medium text-gray-600 text-lg">
            (&nbsp;{totalItems} products found )
          </span>
        </h2>
        <Sort options={sortOptions} />
      </div>
      <div
        className={`${mons.className} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-6 mt-6 px-20`}
      >
        {(isSearching ? filteredProducts : products)?.map((product) => (
          <ProductListingItem key={product.id} {...product} />
        ))}
      </div>
    </>
  );
}

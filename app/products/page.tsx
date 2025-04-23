"use client";

import React, { useState } from "react";
import { ProductListingProps } from "../_models/item";
import ProductListingItem from "../_components/ProductListingItem";
import Header from "../_components/Header";

import { Montserrat } from "next/font/google";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../_components/Spinner";
import SearchBig from "../_components/SearchBig";
import { useDebounce } from "../_hooks/useDebounce";
import {
  fetchfilteredProducts,
  fetchProducts,
  fetchSortedProducts,
} from "../_lib/actions";
import Sort from "../_components/Sort";
import { sortOptions } from "../_lib/constants";
import { useSearchParams } from "next/navigation";
import HeaderSlider from "../_components/HeaderSlider";

const mons = Montserrat({
  subsets: ["latin"],
  variable: "--font-mons",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export default function Page() {
  const [value, setValue] = useState("Search products and categories");
  const [errorText, setErrorText] = useState("");
  const searchParams = useSearchParams();
  const sortBy = searchParams.get("sortBy");

  const debouncedSearch = useDebounce(value, 700);

  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useQuery<ProductListingProps[], Error>({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  const { data: sortedProducts, isLoading: searchLoader } = useQuery({
    queryKey: ["sort", sortBy],
    queryFn: () =>
      sortBy && sortBy !== "" ? fetchSortedProducts(sortBy) : products,
    enabled: !!sortBy,
  });

  const { data: filteredProducts } = useQuery({
    queryKey: ["search", debouncedSearch, sortedProducts],
    queryFn: () =>
      fetchfilteredProducts(
        sortedProducts?.length ? sortedProducts : products ?? [],
        debouncedSearch
      ),
    enabled:
      debouncedSearch.length >= 4 &&
      debouncedSearch !== "Search products, brands and categories" &&
      !!products?.length,
  });

  // const totalItems =
  //   value !== "Search products, brands and categories" && value.length >= 4
  //     ? filteredProducts?.length ?? 0
  //     : (sortedProducts?.length ?? 0) || (products?.length ?? 0);

  const displayProducts =
    (filteredProducts ?? []).length >= 1
      ? filteredProducts
      : sortedProducts?.length
      ? sortedProducts
      : products;

  if (isLoading) return <Spinner />;
  if (searchLoader) return <Spinner />;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div className="bg-gradient-to-br from-[#f5f7fa] to-[#e4ecf4]">
      <Header />
      <div className="pt-24 flex justify-center items-center">
        <HeaderSlider />
      </div>
      <div
        className={`${mons.className} flex justify-between items-center  py-4 mt-3 mx-7 text-xl `}
      >
        <h2 className="font-semibold font-xl">Popular Products</h2>
        <SearchBig
          value={value}
          setValue={setValue}
          errorText={errorText}
          setErrorText={setErrorText}
        />
        <Sort options={sortOptions} />
      </div>
      <div
        className={`${mons.className} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-6 mt-6 px-20`}
      >
        {displayProducts?.map((product) => (
          <ProductListingItem key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}

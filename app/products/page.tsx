"use client";

import React, { useState } from "react";
import { ProductListingProps } from "../_models/item";
import ProductListingItem from "../_components/ProductListingItem";
import Header from "../_components/Header";

import { Montserrat } from "next/font/google";
import { useQuery } from "@tanstack/react-query";
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
import { useClientPagination } from "../_hooks/useClientPagination";
import { Pagination } from "../_components/Pagination";
import Footer from "../_components/Footer";
import ProductSkeleton from "../_components/ProductSkeleton";

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
  const initialPage = 1;
  const limit = 8;

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

  const {
    currentData: pageItems,
    page,
    setPage,
    totalPages,
  } = useClientPagination(displayProducts ?? [], initialPage, limit);

  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div className="bg-gradient-to-br from-[#f5f7fa] to-[#e4ecf4]">
      <Header />

      <div className="pt-24 flex justify-center items-center">
        <HeaderSlider />
      </div>

      <div
        className={`${mons.className} md:flex justify-between items-center py-4 mt-3 mx-7 text-xl `}
      >
        <div>
          <h2 className="text-2xl font-semibold text-[#2C3E50] mt-5 md:mt-0">
            Popular Products
          </h2>
          <div className="w-16 h-1 bg-blue-500 mt-1 rounded ml-[3.2rem]" />
        </div>

        <div className="hidden lg:block">
          <SearchBig
            value={value}
            setValue={setValue}
            errorText={errorText}
            setErrorText={setErrorText}
          />
        </div>
        <div className="mt-6 md:mt-0 flex flex-row-reverse">
          <Sort options={sortOptions} />
        </div>
      </div>

      <div
        className={`${mons.className} grid grid-cols-1 xmd:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 sm:gap-6 py-6 mt-6 px-16 xmd:px-10 lg:px-20`}
      >
        {isLoading || searchLoader
          ? Array.from({ length: limit }).map((_, index) => (
              <ProductSkeleton key={index} />
            ))
          : pageItems?.map((product) => (
              <ProductListingItem key={product.id} {...product} />
            ))}
      </div>

      <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />

      <Footer />
    </div>
  );
}

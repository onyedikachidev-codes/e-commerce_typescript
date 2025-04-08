"use client";

import Spinner from "@/app/_components/Spinner";
import { ProductListingProps } from "@/app/models/item";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import React from "react";

const fetchProduct = async (id: number): Promise<ProductListingProps> => {
  const res: AxiosResponse<ProductListingProps> = await axios.get(
    `https://fakestoreapi.com/products/${id}`
  );

  return res.data;
};

export default function Page({ productId }: { productId: number }) {
  const {
    data: product,
    isLoading,
    isError,
    error,
  } = useQuery<ProductListingProps, Error>({
    queryKey: ["product", productId],
    queryFn: () => fetchProduct(productId),
  });

  if (isLoading) return <Spinner />;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2>{product?.title}</h2>
      <p>{product?.description}</p>
      <p>${product?.price}</p>
      <img src={product?.image} alt={product?.title} />
    </div>
  );
}

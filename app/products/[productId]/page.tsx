"use client";

import Spinner from "@/app/_components/Spinner";
import { ProductListingProps } from "@/app/models/item";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import Image from "next/image";
import React, { use } from "react";

type PageProps = {
  params: Promise<{
    productId: string;
  }>;
};

const fetchProduct = async (id: number): Promise<ProductListingProps> => {
  const res: AxiosResponse<ProductListingProps> = await axios.get(
    `https://fakestoreapi.com/products/${id}`
  );

  return res.data;
};

export default function Page({ params }: PageProps) {
  const { productId } = use(params);
  const id = parseInt(productId);

  const {
    data: product,
    isLoading,
    isError,
    error,
  } = useQuery<ProductListingProps, Error>({
    queryKey: ["product", id],
    queryFn: () => fetchProduct(id),
  });

  if (isLoading) return <Spinner />;
  if (isError) return <div>Error: {error.message}</div>;
  console.log(product);

  return (
    <main>
      <div className="flex">
        <div className="">
          <Image
            src={product?.image}
            alt={product?.title}
            height={50}
            width={50}
          />
        </div>

        <div>
          <h2>{product?.title}</h2>
          <p>{product?.description}</p>
          <p>${product?.price}</p>
        </div>
      </div>
    </main>
  );
}

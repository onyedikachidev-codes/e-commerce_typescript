import axios, { AxiosResponse } from "axios";
import { ProductListingProps } from "../_models/item";

export const fetchSearchedProducts = async (query: string) => {
  const { data }: AxiosResponse<ProductListingProps[]> = await axios.get(
    "https://fakestoreapi.com/products"
  );
  return data.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );
};

export const fetchSortedProducts = async (value: string) => {
  const { data }: AxiosResponse<ProductListingProps[]> = await axios.get(
    "https://fakestoreapi.com/products"
  );
  return data.filter(
    (product) => product.category?.toLowerCase() === value.toLowerCase()
  );
};

export const fetchProducts = async (): Promise<ProductListingProps[]> => {
  const res: AxiosResponse<ProductListingProps[]> = await axios.get(
    "https://fakestoreapi.com/products"
  );

  return res.data;
};

export const fetchfilteredProducts = async (
  products: ProductListingProps[],
  query: string
) => {
  return products.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );
};

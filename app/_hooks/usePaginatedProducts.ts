import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { fetchPaginatedProducts } from "../_lib/actions";

export const usePaginatedProducts = (page: number, limit: number = 8) => {
  return useQuery({
    queryKey: ["products", page],
    queryFn: () => fetchPaginatedProducts(page, limit),
    placeholderData: keepPreviousData,
  });
};

"use client";

import axios, { AxiosResponse } from "axios";
import { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { ProductListingProps } from "../models/item";
import { useQuery } from "@tanstack/react-query";
import { useDebounce } from "../_hooks/useDebounce";
import NavModal from "./NavModal";

export interface SearchProps {
  onSearch: (value: string) => void;
}

const fetchSearchedProducts = async (query: string) => {
  const { data }: AxiosResponse<ProductListingProps[]> = await axios.get(
    "https://fakestoreapi.com/products"
  );
  return data.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );
};

export default function SearchBar(props: SearchProps) {
  const [value, setValue] = useState("Search products...");
  const [showModal, setShowModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);

  const debouncedSearch = useDebounce(value, 700);
  const { onSearch } = props;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setShowModal(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Clean up the event listener when the modal closes or the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const { data } = useQuery({
    queryKey: ["search", debouncedSearch],
    queryFn: () => fetchSearchedProducts(debouncedSearch),
    enabled: !!debouncedSearch && debouncedSearch !== "Search products...",
  });

  function handleSearch(e: ChangeEvent<HTMLInputElement>) {
    const { target } = e;
    setValue(target.value);
    setShowModal(true);
    setIsOpen(true);
  }

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") onSearch(value);
  }

  return (
    <div className="flex flex-col gap-2" ref={modalRef}>
      <div className="relative w-56">
        <input
          type="text"
          placeholder={value}
          className="w-full placeholder-blue-400 border-b border-gray-500 focus:outline-none focus:border-gray-600 px-3 py-2 transition-transform focus:scale-101 duration-200 ease-in-out"
          onChange={handleSearch}
          onKeyDown={handleKeyDown}
        />
        <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-700 hover:text-gray-500">
          <CiSearch size={20} />
        </button>
      </div>

      {/* {error && <p className="mt-2 text-red-500">Something went wrong</p>} */}

      <NavModal
        isOpen={showModal}
        uniqueStyles="fixed translate-y-16 -translate-x-16"
      >
        {data?.map((product) => (
          <div key={product.id} className="border-b p-2">
            {product.title}
          </div>
        ))}
      </NavModal>
    </div>
  );
}

"use client";

import { CiSearch } from "react-icons/ci";

import NavModal from "./NavModal";
import { useSearch } from "../_hooks/useSearch";

export interface SearchProps {
  onSearch: (value: string) => void;
}

export default function SearchBar() {
  const { modalRef, value, handleSearch, errorText, showModal, data } =
    useSearch();
  return (
    <div className="flex flex-col gap-2" ref={modalRef}>
      <div className="relative w-56">
        <input
          type="text"
          placeholder={value}
          className="w-full placeholder-blue-400 border-b relative border-gray-500 focus:outline-none focus:border-gray-600 px-3 py-2 transition-transform focus:scale-101 duration-200 ease-in-out"
          onChange={handleSearch}
        />
        <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-700 hover:text-gray-500 cursor-pointer">
          <CiSearch size={20} />
        </button>
      </div>

      {/* {error && <p className="mt-2 text-red-500">Something went wrong</p>} */}
      {errorText && (
        <p className="mt-2 absolute  translate-y-10 text-red-500">
          {errorText}
        </p>
      )}
      <NavModal
        isOpen={showModal}
        uniqueStyles="absolute translate-y-16 -translate-x-16"
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

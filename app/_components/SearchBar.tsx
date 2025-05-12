"use client";

import { CiSearch } from "react-icons/ci";
import NavModal from "./NavModal";
import { useSearch } from "../_hooks/useSearch";

export interface SearchProps {
  onSearch: (value: string) => void;
}

export default function SearchBar() {
  const {
    modalRef,
    value,
    handleSearch,
    errorText,
    showModal,
    data,
    ghostText,
    handleKeyDown,
    activeIndex,
    hideGhost,
  } = useSearch();

  const autoCompleteText = ghostText.slice(0, 10).toLowerCase();
  return (
    <div className="flex flex-col gap-2 relative" ref={modalRef}>
      <div className="relative w-[12.5rem] md:w-56">
        {!hideGhost && (
          <div
            className="absolute top-0 left-0 text-blue-300 pointer-events-none py-2 px-3 duration-200 transition-all whitespace-pre overflow-hidden text-ellipsis max-w-[82%]"
            style={{
              fontSize: "1rem",
              fontFamily: "inherit",
            }}
          >
            <span className="text-black">{value}</span>
            <span className="text-blue-300">
              {value.length > 0 ? autoCompleteText : ""}
            </span>
          </div>
        )}
        <input
          type="text"
          placeholder="Search products..."
          value={value}
          className="w-full placeholder-blue-400 border-b relative z-10 border-gray-500 focus:outline-none focus:border-gray-600 px-3 py-2 transition-transform duration-200 ease-in-out bg-transparent"
          onChange={handleSearch}
          onKeyDown={handleKeyDown}
          maxLength={15}
          style={{
            fontSize: "1rem",
            fontFamily: "inherit",
            whiteSpace: "pre",
            textOverflow: "ellipsis",
          }}
        />
        <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-700 hover:text-gray-500 cursor-pointer">
          <CiSearch size={20} />
        </button>
      </div>

      {/* {error && <p className="mt-2 text-red-500">Something went wrong</p>} */}
      {errorText && (
        <p className="mt-2 absolute translate-y-10 text-red-500">{errorText}</p>
      )}
      <NavModal isOpen={showModal}>
        {data?.map((product, index) => (
          <li
            key={product.id}
            className={`border-b border-gray-300 p-2 cursor-pointer hover:bg-blue-100 whitespace-nowrap overflow-hidden text-ellipsis ${
              index === activeIndex ? "bg-blue-100" : ""
            }`}
          >
            {product.title}
          </li>
        ))}
      </NavModal>
    </div>
  );
}

"use client";

import React, { useState, useRef, useEffect } from "react";
import { Search, X } from "lucide-react";

import { useSearch } from "../_hooks/useSearch";
import NavModal from "./NavModal";

export default function AnimatedSearchBar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

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

  // Handle click outside to collapse
  // Handle click outside to collapse
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        event.target &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsExpanded(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsExpanded(false);
      }
    };

    if (isExpanded) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscape);
      // Focus input when expanded
      setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }, 200);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isExpanded]);

  const handleSearchIconClick = () => {
    setIsExpanded(true);
  };

  const handleClose = () => {
    setIsExpanded(false);
  };

  const autoCompleteText = ghostText.slice(0, 10).toLowerCase();

  return (
    <div ref={containerRef} className="relative">
      {/* Search Icon Button */}
      <button
        aria-label="Search Products"
        className={`p-2 cursor-pointer rounded-lg text-gray-700 hover:text-[#00B259] hover:bg-[#EAE8E3] transition-all duration-200 ${
          isExpanded ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
        title="Search our products"
        onClick={handleSearchIconClick}
      >
        <Search size={22} />
      </button>

      {/* Animated Search Bar */}
      <div
        className={`absolute top-0 right-0 transition-all duration-300 ease-in-out ${
          isExpanded
            ? "w-[12.5rem] md:w-56 opacity-100 translate-x-0"
            : "w-0 opacity-0 translate-x-full"
        }`}
        style={{ transformOrigin: "right center" }}
      >
        <div className="flex flex-col gap-2 relative" ref={modalRef}>
          <div className="relative">
            {/* Ghost Text */}
            {!hideGhost && isExpanded && (
              <div
                className="absolute top-0 left-0 text-[#00B259] opacity-50 pointer-events-none py-2 px-3 duration-200 transition-all whitespace-pre overflow-hidden text-ellipsis max-w-[82%]"
                style={{
                  fontSize: "1rem",
                  fontFamily: "inherit",
                }}
              >
                <span className="text-black">{value}</span>
                <span className="text-[#00B259] opacity-50">
                  {value.length > 0 ? autoCompleteText : ""}
                </span>
              </div>
            )}

            {/* Search Input */}
            <input
              ref={inputRef}
              type="text"
              placeholder="Search products..."
              value={value}
              className="w-full placeholder-[#009246] placeholder-opacity-70 border-b relative z-10 border-[#005C34] focus:outline-none focus:border-[#00B259] px-3 py-2 transition-all duration-200 ease-in-out bg-transparent text-gray-800"
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

            {/* Search Icon in Input */}
            <button
              className="absolute right-8 top-1/2 transform -translate-y-1/2 text-[#00B259] hover:text-[#009246] cursor-pointer transition-colors duration-200"
              onClick={handleClose}
            >
              <Search size={18} />
            </button>

            {/* Close Button */}
            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-[#00B259] cursor-pointer transition-colors duration-200"
              onClick={handleClose}
              aria-label="Close search"
            >
              <X size={16} />
            </button>
          </div>

          {errorText && (
            <p className="absolute top-full left-0 mt-1 text-red-500 text-sm bg-white px-2 py-1 rounded shadow-sm border border-red-200 whitespace-nowrap z-50">
              {errorText}
            </p>
          )}

          {/* Dropdown Modal */}
          <NavModal isOpen={showModal && isExpanded}>
            {data?.map((product, index) => (
              <li
                key={product.id}
                className={`border-b border-[#EAE8E3] last:border-b-0 p-3 cursor-pointer hover:bg-[#EAE8E3] whitespace-nowrap overflow-hidden text-ellipsis transition-colors duration-150 ${
                  index === activeIndex
                    ? "bg-[#EAE8E3] text-[#00B259]"
                    : "text-gray-800"
                }`}
              >
                <span className="text-sm font-medium">{product.title}</span>
              </li>
            ))}
          </NavModal>
        </div>
      </div>
    </div>
  );
}

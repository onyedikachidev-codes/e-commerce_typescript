"use client";

import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useDebounce } from "./useDebounce";
import { useQuery } from "@tanstack/react-query";
import { fetchSearchedProducts } from "../_lib/actions";

export function useSearch() {
  const [value, setValue] = useState("Search products...");
  const [showModal, setShowModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [errorText, setErrorText] = useState("");
  const modalRef = useRef<HTMLDivElement | null>(null);

  const debouncedSearch = useDebounce(value, 700);

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

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const { data } = useQuery({
    queryKey: ["search", debouncedSearch],
    queryFn: () => fetchSearchedProducts(debouncedSearch),
    enabled:
      debouncedSearch.length >= 4 && debouncedSearch !== "Search products...",
  });

  function handleSearch(e: ChangeEvent<HTMLInputElement>) {
    const { target } = e;
    setValue(target.value);

    if (target.value.length < 4) {
      setErrorText("Please enter at least 4 characters.");
      setShowModal(false);
      setIsOpen(false);
    } else {
      setErrorText("");
      setShowModal(true);
      setIsOpen(true);
    }

    if (target.value.length < 1) {
      setErrorText("");
    }
  }

  return { value, handleSearch, modalRef, errorText, showModal, data };
}

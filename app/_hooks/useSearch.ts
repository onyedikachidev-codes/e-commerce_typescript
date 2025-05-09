"use client";

import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useDebounce } from "./useDebounce";
import { useQuery } from "@tanstack/react-query";
import { fetchSearchedProducts } from "../_lib/actions";
import axios from "axios";

export function useSearch() {
  const [value, setValue] = useState("Search products...");
  const [showModal, setShowModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [errorText, setErrorText] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

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

  //Effect for suggestions based on user input

  useEffect(() => {
    if (value.trim().length === 0) return;

    const fetchSuggestions = async () => {
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const titles = res.data.map((item: any) => item.title);
        setSuggestions(titles);
      } catch (error) {
        console.error("Failed to fetch suggestions:", error);
      }
    };

    fetchSuggestions();
  }, [value]);

  const { data } = useQuery({
    queryKey: ["search", debouncedSearch],
    queryFn: () => fetchSearchedProducts(debouncedSearch),
    enabled:
      debouncedSearch.length >= 4 && debouncedSearch !== "Search products...",
  });

  const matchedSuggestion = suggestions.find(
    (s) =>
      typeof s === "string" &&
      s.toLowerCase().startsWith(value.toLowerCase()) &&
      s.toLowerCase() !== value.toLowerCase()
  );

  const ghostText = matchedSuggestion?.slice(value.length) || "";

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if ((e.key === "Tab" || e.key === "ArrowRight") && ghostText) {
      e.preventDefault();
      setValue(value + ghostText);
    }

    if (!data || data.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((prev) => (prev + 1) % data.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));
    } else if (e.key === "Enter") {
      e.preventDefault();
    }
  };

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
      console.log(ghostText);
    }
  }

  return {
    value,
    handleSearch,
    modalRef,
    errorText,
    showModal,
    data,
    ghostText,
    handleKeyDown,
    activeIndex,
  };
}

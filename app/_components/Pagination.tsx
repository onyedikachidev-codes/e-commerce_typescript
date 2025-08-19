import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationControlsProps {
  page: number;
  totalPages: number;
  onPageChange: (newPage: number) => void;
}

// Utility to build page array with ellipsis
function getPageItems(page: number, totalPages: number): (number | "...")[] {
  const items: (number | "...")[] = [];

  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) items.push(i);
    return items;
  }

  if (page <= 5) {
    for (let i = 1; i <= 5; i++) items.push(i);
    items.push("...");
    items.push(totalPages);
    return items;
  }

  if (page > totalPages - 5) {
    items.push(1);
    items.push("...");
    for (let i = totalPages - 4; i <= totalPages; i++) items.push(i);
    return items;
  }

  // middle range
  items.push(1);
  items.push("...");
  for (let i = page - 2; i <= page + 2; i++) items.push(i);
  items.push("...");
  items.push(totalPages);
  return items;
}

export const Pagination: React.FC<PaginationControlsProps> = ({
  page,
  totalPages,
  onPageChange,
}) => {
  const pageItems = getPageItems(page, totalPages);

  return (
    <div className="flex items-center space-x-2 justify-center pb-8 pt-4">
      <button
        onClick={() => onPageChange(page - 1)}
        disabled={page === 1}
        className="p-2 rounded-full hover:bg-[#EAE8E3] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
      >
        <ChevronLeft size={20} />
      </button>

      {pageItems.map((item, idx) =>
        item === "..." ? (
          <span key={`ellipsis-${idx}`} className="px-2 text-gray-500">
            …
          </span>
        ) : (
          <button
            key={item}
            onClick={() => onPageChange(item)}
            className={`w-8 h-8 flex items-center justify-center rounded-full cursor-pointer font-medium
              ${
                item === page
                  ? "bg-[#00B259] text-white"
                  : "text-[#005C34] hover:bg-[#EAE8E3]"
              }`}
          >
            {item}
          </button>
        )
      )}

      <button
        onClick={() => onPageChange(page + 1)}
        disabled={page === totalPages}
        className="p-2 rounded-full cursor-pointer hover:bg-[#EAE8E3] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
};

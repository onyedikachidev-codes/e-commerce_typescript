// hooks/useClientPagination.ts
import { useState, useMemo, useEffect } from "react";

export function useClientPagination<T>(items: T[], initialPage = 1, limit = 8) {
  const [page, setPage] = useState(initialPage);

  // whenever the items array changes, reset to page 1
  useEffect(() => {
    setPage(1);
  }, [items]);

  const totalPages = useMemo(
    () => Math.max(1, Math.ceil(items.length / limit)),
    [items.length, limit]
  );

  useEffect(() => {
    if (page > totalPages) {
      setPage(totalPages);
    }
  }, [page, totalPages]);

  const currentData = useMemo(() => {
    const start = (page - 1) * limit;
    return items.slice(start, start + limit);
  }, [items, page, limit]);

  return { currentData, page, setPage, totalPages };
}

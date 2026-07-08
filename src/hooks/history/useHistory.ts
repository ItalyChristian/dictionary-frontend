import { useCallback, useEffect, useState } from "react";
import { UseHistoryReturn } from "./types";
import { History, HistoryResponse } from "@/types/history";
import { getHistory } from "@/actions/history/history";

export function useHistory(
  initialPage: number = 1,
  limit: number = 10,
): UseHistoryReturn {
  const [history, setHistory] = useState<History[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [pagination, setPagination] = useState({
    totalDocs: 0,
    totalPages: 0,
    currentPage: initialPage,
    hasNext: false,
    hasPrev: false,
  });
  const [limitPerPage] = useState(limit);

  const fetchHistory = useCallback(
    async (page: number = pagination.currentPage) => {
      setIsLoading(true);
      setError(null);

      try {
        const data: HistoryResponse = await getHistory({
          page,
          limit: limitPerPage,
        });

        setHistory(data.results);
        setPagination({
          totalDocs: data.totalDocs,
          totalPages: data.totalPages,
          currentPage: data.page,
          hasNext: data.hasNext,
          hasPrev: data.hasPrev,
        });
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load history");
      } finally {
        setIsLoading(false);
      }
    },
    [limitPerPage, pagination.currentPage],
  );

  const refetch = useCallback(async () => {
    await fetchHistory(pagination.currentPage);
  }, [fetchHistory, pagination.currentPage]);

  const goToPage = useCallback(
    (page: number) => {
      if (
        page >= 1 &&
        page <= pagination.totalPages &&
        page !== pagination.currentPage
      ) {
        fetchHistory(page);
      }
    },
    [fetchHistory, pagination.totalPages, pagination.currentPage],
  );

  const nextPage = useCallback(() => {
    if (pagination.hasNext) {
      goToPage(pagination.currentPage + 1);
    }
  }, [pagination.hasNext, pagination.currentPage, goToPage]);

  const prevPage = useCallback(() => {
    if (pagination.hasPrev) {
      goToPage(pagination.currentPage - 1);
    }
  }, [pagination.hasPrev, pagination.currentPage, goToPage]);

  useEffect(() => {
    fetchHistory(initialPage);
  }, []);

  return {
    history,
    isLoading,
    error,
    totalDocs: pagination.totalDocs,
    totalPages: pagination.totalPages,
    currentPage: pagination.currentPage,
    hasNext: pagination.hasNext,
    hasPrev: pagination.hasPrev,
    refetch,
    goToPage,
    nextPage,
    prevPage,
  };
}

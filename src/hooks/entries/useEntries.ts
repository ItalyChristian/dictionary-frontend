import { useCallback, useEffect, useState } from "react";
import { getEntries } from "@/actions/entries/entries";
import { EntriesResponse } from "@/types/entries";
import { UseEntriesReturn } from "./types";

export function useEntries(initialLimit: number = 20): UseEntriesReturn {
  const [entries, setEntries] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [pagination, setPagination] = useState({
    totalDocs: 0,
    hasNext: false,
    hasPrev: false,
    nextCursor: null as string | null,
    previousCursor: null as string | null,
  });
  const [currentCursor, setCurrentCursor] = useState<string | null>(null);
  const [limit] = useState(initialLimit);
  const [isSearching, setIsSearching] = useState(false);

  const fetchEntries = useCallback(
    async (cursor: string | null = null, search: string = searchTerm) => {
      setIsLoading(true);
      setError(null);

      try {
        const data: EntriesResponse = await getEntries({
          search: search || undefined,
          limit,
          cursor,
        });

        setEntries(data.results);
        setPagination({
          totalDocs: data.totalDocs,
          hasNext: data.hasNext,
          hasPrev: data.hasPrev,
          nextCursor: data.next,
          previousCursor: data.previous,
        });
        setCurrentCursor(cursor);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load words");
        console.error("Error in useEntries:", err);
      } finally {
        setIsLoading(false);
      }
    },
    [limit, searchTerm],
  );

  const loadNext = useCallback(async () => {
    if (pagination.hasNext && pagination.nextCursor) {
      await fetchEntries(pagination.nextCursor, searchTerm);
    }
  }, [pagination.hasNext, pagination.nextCursor, fetchEntries, searchTerm]);

  const loadPrevious = useCallback(async () => {
    if (pagination.hasPrev && pagination.previousCursor) {
      await fetchEntries(pagination.previousCursor, searchTerm);
    }
  }, [pagination.hasPrev, pagination.previousCursor, fetchEntries, searchTerm]);

  const refetch = useCallback(async () => {
    await fetchEntries(null, searchTerm);
  }, [fetchEntries, searchTerm]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isSearching) {
        fetchEntries(null, searchTerm);
        setIsSearching(false);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [searchTerm, fetchEntries, isSearching]);

  const handleSetSearchTerm = useCallback((term: string) => {
    setSearchTerm(term);
    setIsSearching(true);
  }, []);

  useEffect(() => {
    fetchEntries(null);
  }, []);

  return {
    entries,
    isLoading,
    error,
    totalDocs: pagination.totalDocs,
    hasNext: pagination.hasNext,
    hasPrev: pagination.hasPrev,
    nextCursor: pagination.nextCursor,
    previousCursor: pagination.previousCursor,
    searchTerm,
    setSearchTerm: handleSetSearchTerm,
    loadNext,
    loadPrevious,
    refetch,
  };
}

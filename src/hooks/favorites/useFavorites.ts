import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  getFavorites,
  removeFavorite,
  addFavorite,
} from "@/actions/favorites/favorites";
import { Favorite, FavoritesResponse } from "@/types/favorites";
import { UseFavoritesReturn } from "./types";

export function useFavorites(
  initialPage: number = 1,
  limit: number = 10,
): UseFavoritesReturn {
  const [favorites, setFavorites] = useState<Favorite[]>([]);
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

  const fetchFavorites = useCallback(
    async (page: number = pagination.currentPage) => {
      setIsLoading(true);
      setError(null);

      try {
        const data: FavoritesResponse = await getFavorites({
          page,
          limit: limitPerPage,
        });

        setFavorites(data.results);
        setPagination({
          totalDocs: data.totalDocs,
          totalPages: data.totalPages,
          currentPage: data.page,
          hasNext: data.hasNext,
          hasPrev: data.hasPrev,
        });
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to load favorites",
        );
      } finally {
        setIsLoading(false);
      }
    },
    [limitPerPage, pagination.currentPage],
  );

  const refetch = useCallback(async () => {
    await fetchFavorites(pagination.currentPage);
  }, [fetchFavorites, pagination.currentPage]);

  const goToPage = useCallback(
    (page: number) => {
      if (
        page >= 1 &&
        page <= pagination.totalPages &&
        page !== pagination.currentPage
      ) {
        fetchFavorites(page);
      }
    },
    [fetchFavorites, pagination.totalPages, pagination.currentPage],
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

  const handleRemoveFavorite = useCallback(async (word: string) => {
    try {
      await removeFavorite(word);

      setFavorites((prev) => prev.filter((fav) => fav.word !== word));
      setPagination((prev) => ({
        ...prev,
        totalDocs: prev.totalDocs - 1,
      }));
      toast.success(`"${word}" removed from favorites.`);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Failed to remove favorite";
      setError(message);
      toast.error(message);
      throw err;
    }
  }, []);

  const handleAddFavorite = useCallback(
    async (word: string) => {
      try {
        await addFavorite(word);

        await fetchFavorites(pagination.currentPage);
      } catch (err) {
        const message =
          err instanceof Error ? err.message : "Failed to add favorite";
        toast.error(message);
        throw err;
      }
    },
    [fetchFavorites, pagination.currentPage],
  );

  useEffect(() => {
    fetchFavorites(initialPage);
  }, []);

  return {
    favorites,
    isLoading,
    error,
    totalDocs: pagination.totalDocs,
    totalPages: pagination.totalPages,
    currentPage: pagination.currentPage,
    hasNext: pagination.hasNext,
    hasPrev: pagination.hasPrev,
    refetch,
    removeFavorite: handleRemoveFavorite,
    addFavorite: handleAddFavorite,
    goToPage,
    nextPage,
    prevPage,
  };
}

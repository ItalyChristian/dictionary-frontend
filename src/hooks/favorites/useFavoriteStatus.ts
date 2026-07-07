import { useState, useCallback } from "react";
import { addFavorite, removeFavorite } from "@/actions/favorites/favorites";
import { UseFavoriteStatusReturn } from "./types";

export function useFavoriteStatus(
  word: string,
  initialStatus: boolean = false,
): UseFavoriteStatusReturn {
  const [isFavorite, setIsFavorite] = useState(initialStatus);
  const [isLoading, setIsLoading] = useState(false);

  const add = useCallback(async () => {
    setIsLoading(true);
    try {
      await addFavorite(word);
      setIsFavorite(true);
    } catch (error) {
      console.error("Error adding favorite:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  }, [word]);

  const remove = useCallback(async () => {
    setIsLoading(true);
    try {
      await removeFavorite(word);
      setIsFavorite(false);
    } catch (error) {
      console.error("Error removing favorite:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  }, [word]);

  const toggleFavorite = useCallback(async () => {
    if (isFavorite) {
      await remove();
    } else {
      await add();
    }
  }, [isFavorite, add, remove]);

  return {
    isFavorite,
    isLoading,
    toggleFavorite,
    add,
    remove,
  };
}

import { Favorite } from "@/types/favorites";

export interface UseFavoritesReturn {
  favorites: Favorite[];
  isLoading: boolean;
  error: string | null;
  totalDocs: number;
  totalPages: number;
  currentPage: number;
  hasNext: boolean;
  hasPrev: boolean;
  refetch: () => Promise<void>;
  removeFavorite: (word: string) => Promise<void>;
  addFavorite: (word: string) => Promise<void>;
  goToPage: (page: number) => void;
  nextPage: () => void;
  prevPage: () => void;
}

export interface UseFavoriteStatusReturn {
  isFavorite: boolean;
  isLoading: boolean;
  toggleFavorite: () => Promise<void>;
  add: () => Promise<void>;
  remove: () => Promise<void>;
}

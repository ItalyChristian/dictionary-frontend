import { Favorite } from "@/types/favorites";

export interface FavoriteItemProps {
  favorite: Favorite;
  onRemove: (word: string) => void;
}

export interface ErrorProps {
  error: string | null;
}

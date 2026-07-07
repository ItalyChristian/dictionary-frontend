import { Favorite } from "@/types/favorites";

export interface FavoriteItemProps {
  favorite: Favorite;
  onRemove: (word: string) => void;
  className?: string;
}

export interface ErrorProps {
  error: string | null;
}

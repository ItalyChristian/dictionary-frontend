import { WordResponse } from "@/types/word";

export interface WordDetailsProps {
  wordData: WordResponse;
  onFavoriteToggle?: (isFavorite: boolean) => void;
  className?: string;
}

export interface FooterProps {
  favorites: string | number | null;
  views: string | number | null;
}

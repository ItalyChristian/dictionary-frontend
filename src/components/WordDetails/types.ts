import { WordResponse } from "@/types/word";

export interface WordDetailsProps {
  wordData: WordResponse;
  onFavoriteToggle?: (isFavorite: boolean) => void;
  className?: string;
}

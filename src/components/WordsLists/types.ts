export interface WordListProps {
  words: string[];
  onWordSelect?: (word: string) => void;
  selectedWord?: string;
  className?: string;
}

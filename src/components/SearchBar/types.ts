export interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  totalResults?: number;
  className?: string;
  isLoading?: boolean;
}

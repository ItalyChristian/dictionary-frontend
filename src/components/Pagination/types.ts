export type PaginationMode = "numeric" | "cursor";

export interface PaginationProps {
  currentPage?: number;
  totalPages?: number;
  hasNext: boolean;
  hasPrev: boolean;
  onPageChange?: (page: number) => void;
  onNext: () => void;
  onPrev: () => void;
  totalItems?: number;
  itemsPerPage?: number;
  className?: string;
  isLoading?: boolean;
  mode?: PaginationMode;
}

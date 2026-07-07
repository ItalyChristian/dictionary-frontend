import { History } from "@/types/history";

export interface UseHistoryReturn {
  history: History[];
  isLoading: boolean;
  error: string | null;
  totalDocs: number;
  totalPages: number;
  currentPage: number;
  hasNext: boolean;
  hasPrev: boolean;
  refetch: () => Promise<void>;
  goToPage: (page: number) => void;
  nextPage: () => void;
  prevPage: () => void;
}

export interface UseEntriesReturn {
  entries: string[];
  isLoading: boolean;
  error: string | null;
  totalDocs: number;
  hasNext: boolean;
  hasPrev: boolean;
  nextCursor: string | null;
  previousCursor: string | null;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  loadNext: () => Promise<void>;
  loadPrevious: () => Promise<void>;
  refetch: () => Promise<void>;
}

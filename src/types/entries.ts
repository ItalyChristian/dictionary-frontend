export interface EntriesResponse {
  results: string[];
  totalDocs: number;
  previous: string | null;
  next: string | null;
  hasNext: boolean;
  hasPrev: boolean;
}

export interface EntriesQueryParams {
  search?: string;
  limit?: number;
  cursor?: string | null;
}

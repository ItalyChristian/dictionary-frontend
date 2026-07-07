export interface Favorite {
  word: string;
  added: string;
}

export interface PaginatedResponse<T> {
  results: T[];
  totalDocs: number;
  page: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
}

export type FavoritesResponse = PaginatedResponse<Favorite>;

export interface FavoritesQueryParams {
  page?: number;
  limit?: number;
}

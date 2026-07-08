import { PaginatedResponse } from "./pagination";

export interface Favorite {
  word: string;
  added: string;
}

export type FavoritesResponse = PaginatedResponse<Favorite>;

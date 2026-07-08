import { PaginatedResponse } from "./pagination";

export interface History {
  word: string;
  added: string;
}

export type HistoryResponse = PaginatedResponse<History>;

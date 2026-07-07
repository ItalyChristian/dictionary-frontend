"use server";

import { HistoryResponse } from "@/types/history";
import { QueryParams } from "@/types/pagination";
import httpClient from "@/utils/httpClient";

export async function getHistory(
  params: QueryParams = {},
): Promise<HistoryResponse> {
  const { page = 1, limit = 10 } = params;

  try {
    const { data } = await httpClient.get<HistoryResponse>(
      `/user/me/history?page=${page}&limit=${limit}`,
    );

    return data;
  } catch (error) {
    throw error;
  }
}

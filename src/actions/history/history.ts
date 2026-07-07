"use server";

import { HistoryResponse } from "@/types/history";
import { QueryParams } from "@/types/pagination";
import { API_BASE_URL } from "@/utils/constants";
import { getAuthHeaders } from "@/utils/getAuthHeaders";

export async function getHistory(
  params: QueryParams = {},
): Promise<HistoryResponse> {
  const { page = 1, limit = 10 } = params;

  try {
    const url = `${API_BASE_URL}/user/me/history?page=${page}&limit=${limit}`;
    const headers = await getAuthHeaders();

    const response = await fetch(url, {
      headers,
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch history: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

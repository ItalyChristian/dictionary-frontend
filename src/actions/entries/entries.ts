"use server";

import { EntriesResponse, EntriesQueryParams } from "@/types/entries";
import httpClient from "@/utils/httpClient";

export async function getEntries(
  params: EntriesQueryParams = {},
): Promise<EntriesResponse> {
  const { search, limit = 20, cursor = null } = params;

  try {
    let url = `/entries/en?limit=${limit}`;

    if (search && search.trim()) {
      url += `&search=${encodeURIComponent(search.trim())}`;
    }

    if (cursor) {
      url += `&cursor=${encodeURIComponent(cursor)}`;
    }

    const { data } = await httpClient.get<EntriesResponse>(url);
    return data;
  } catch (error) {
    console.error("Error loading words:", error);
    throw error;
  }
}

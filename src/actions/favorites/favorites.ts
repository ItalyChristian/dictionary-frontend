"use server";

import { FavoritesResponse } from "@/types/favorites";
import { QueryParams } from "@/types/pagination";
import httpClient from "@/utils/httpClient";

export async function getFavorites(
  params: QueryParams = {},
): Promise<FavoritesResponse> {
  const { page = 1, limit = 10 } = params;

  try {
    const { data } = await httpClient.get<FavoritesResponse>(
      `/user/me/favorites?page=${page}&limit=${limit}`,
    );

    return data;
  } catch (error) {
    throw error;
  }
}

export async function addFavorite(word: string): Promise<void> {
  try {
    await httpClient.post(`/entries/en/${encodeURIComponent(word)}/favorite`);
  } catch (error) {
    console.error("Error adding favorite:", error);
    throw error;
  }
}

export async function removeFavorite(word: string): Promise<void> {
  try {
    await httpClient.delete(
      `/entries/en/${encodeURIComponent(word)}/unfavorite`,
      {
        headers: {
          "Content-Type": undefined,
        },
      },
    );
  } catch (error) {
    console.error("Error removing favorite:", error);
    throw error;
  }
}

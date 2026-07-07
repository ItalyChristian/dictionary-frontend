"use server";

import { FavoritesResponse } from "@/types/favorites";
import { QueryParams } from "@/types/pagination";
import { API_BASE_URL } from "@/utils/constants";
import { getAuthHeaders } from "@/utils/getAuthHeaders";

export async function getFavorites(
  params: QueryParams = {},
): Promise<FavoritesResponse> {
  const { page = 1, limit = 10 } = params;

  try {
    const url = `${API_BASE_URL}/user/me/favorites?page=${page}&limit=${limit}`;
    const headers = await getAuthHeaders();

    const response = await fetch(url, {
      headers,
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch favorites: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

export async function addFavorite(word: string): Promise<void> {
  try {
    const url = `${API_BASE_URL}/entries/en/${encodeURIComponent(word)}/favorite`;
    const headers = await getAuthHeaders();

    const response = await fetch(url, {
      method: "POST",
      headers,
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Failed to add favorite: ${response.status}`);
    }
  } catch (error) {
    console.error("Error adding favorite:", error);
    throw error;
  }
}

export async function removeFavorite(word: string): Promise<void> {
  try {
    const url = `${API_BASE_URL}/entries/en/${encodeURIComponent(word)}/unfavorite`;

    const headers = new Headers(await getAuthHeaders());
    headers.delete("Content-Type");

    const response = await fetch(url, {
      method: "DELETE",
      headers,
      cache: "no-store",
    });

    if (!response.ok) {
      const responseText = await response.text();

      throw new Error(
        `Failed to remove favorite: ${response.status} ${responseText}`,
      );
    }
  } catch (error) {
    console.error("Error removing favorite:", error);
    throw error;
  }
}

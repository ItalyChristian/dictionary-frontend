"use server";

import { FavoritesResponse, FavoritesQueryParams } from "@/types/favorites";
import { API_BASE_URL } from "@/utils/constants";
import { getAuthHeaders } from "@/utils/getAuthHeaders";

export async function getFavorites(
  params: FavoritesQueryParams = {},
): Promise<FavoritesResponse> {
  const { page = 1, limit = 10 } = params;

  try {
    const url = `${API_BASE_URL}/user/me/favorites?page=${page}&limit=${limit}`;
    const headers = await getAuthHeaders();

    const response = await fetch(url, {
      headers,
      cache: "no-store",
      next: { tags: ["categories"] },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch favorites: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching favorites:", error);
    throw error;
  }
}

export async function addFavorite(word: string): Promise<void> {
  try {
    const url = `${API_BASE_URL}/entries/en/${word}/favorite`;
    const headers = await getAuthHeaders();

    const response = await fetch(url, {
      method: "POST",
      headers,
      cache: "no-store",
      next: { tags: ["categories"] },
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
    const url = `${API_BASE_URL}/entries/en/${word}/unfavorite`;
    const headers = await getAuthHeaders();

    const response = await fetch(url, {
      method: "DELETE",
      headers,
      cache: "no-store",
      next: { tags: ["categories"] },
    });

    if (!response.ok) {
      throw new Error(`Failed to remove favorite: ${response.status}`);
    }
  } catch (error) {
    console.error("Error removing favorite:", error);
    throw error;
  }
}

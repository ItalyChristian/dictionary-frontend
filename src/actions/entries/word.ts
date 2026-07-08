"use server";

import { WordResponse } from "@/types/word";
import httpClient from "@/utils/httpClient";

export async function getWord(word: string): Promise<WordResponse> {
  try {
    const { data } = await httpClient.get<WordResponse>(
      `/entries/en/${encodeURIComponent(word)}`,
    );

    if (!data.details?.meanings || data.details.meanings.length === 0) {
      throw new Error(`No definitions found for "${word}"`);
    }

    return data;
  } catch (error) {
    console.error(`Error fetching word "${word}":`, error);
    throw error;
  }
}

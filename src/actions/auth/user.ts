"use server";

import { cookies } from "next/headers";
import { API_BASE_URL } from "@/utils/constants";
import { getAuthHeaders } from "@/utils/getAuthHeaders";
import { User, UserResponse } from "@/hooks/auth/types";

export async function getCurrentUser(): Promise<User | null> {
  try {
    const headers = await getAuthHeaders();

    const response = await fetch(`${API_BASE_URL}/user/me`, {
      method: "GET",
      headers,
      cache: "no-store",
    });

    if (!response.ok) {
      if (response.status === 401 || response.status === 403) {
        return null;
      }
      throw new Error(`Failed to fetch user: ${response.status}`);
    }

    const data: UserResponse = await response.json();

    return {
      id: data.id,
      name: data.name,
      email: data.email,
      favorites: data.favorites || [],
      createdAt: data.createdAt,
    };
  } catch (error) {
    console.error("Error fetching current user:", error);
    return null;
  }
}

export async function getCurrentUserCached(): Promise<User | null> {
  try {
    const cookieStore = await cookies();
    const userData = cookieStore.get("user_data")?.value;

    if (userData) {
      try {
        const parsed = JSON.parse(userData);
        return parsed;
      } catch {
        return await getCurrentUser();
      }
    }

    return await getCurrentUser();
  } catch (error) {
    console.error("Error getting cached user:", error);
    return null;
  }
}

"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { API_BASE_URL } from "@/utils/constants";
import { loginSchema } from "./schema";
import {
  checkRateLimit,
  incrementLoginAttempts,
  resetLoginAttempts,
} from "@/utils/resetLoginAttempts";

export async function loginAction(
  prevState: { error?: string; success?: boolean; redirectTo?: string } | null,
  formData: FormData,
): Promise<{ error?: string; success?: boolean; redirectTo?: string }> {
  try {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const validated = loginSchema.safeParse({ email, password });

    if (!validated.success) {
      return {
        error: validated.error.issues.map((e) => e.message).join(", "),
      };
    }

    const rateLimit = checkRateLimit(email);
    if (rateLimit.blocked) {
      return {
        error: `Too many attempts. Try again in ${rateLimit.remainingTime} minute(s).`,
      };
    }

    const response = await fetch(`${API_BASE_URL}/auth/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email.trim().toLowerCase(),
        password,
      }),
    });

    if (!response.ok) {
      incrementLoginAttempts(email);

      if (response.status === 401) {
        return { error: "Invalid credentials." };
      }

      if (response.status === 400) {
        return { error: "Invalid request." };
      }

      return { error: "Error logging in. Please try again." };
    }

    const data = await response.json();

    if (!data.token) {
      return { error: "Token is required." };
    }

    resetLoginAttempts(email);

    const cookieStore = await cookies();

    cookieStore.set("auth_token", data.token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
      priority: "high",
    });

    cookieStore.set(
      "user_data",
      JSON.stringify({
        id: data.id,
        name: data.name,
      }),
      {
        httpOnly: false,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 24 * 7,
        path: "/",
      },
    );

    revalidatePath("/");

    return {
      success: true,
      redirectTo: "/",
    };
  } catch (error) {
    console.error("Erro on loginAction:", error);
    return {
      error: "Internal error. Try again later.",
    };
  }
}

export async function logoutAction(): Promise<{ success: boolean }> {
  try {
    const cookieStore = await cookies();

    cookieStore.delete("auth_token");
    cookieStore.delete("user_data");

    revalidatePath("/");

    return { success: true };
  } catch (error) {
    console.error("Logout error:", error);
    return { success: false };
  }
}

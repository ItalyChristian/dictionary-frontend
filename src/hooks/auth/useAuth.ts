"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { User } from "./types";
import { logoutAction } from "@/api/auth/auth";

export function useAuth() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch("/user/me");
        if (response.ok) {
          const data = await response.json();
          setUser(data.user);
        } else {
          setUser(null);
        }
      } catch (error) {
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUser();
  }, []);

  const logout = async () => {
    try {
      const result = await logoutAction();

      if (result.success) {
        router.push("/login");
        router.refresh();
      }
    } catch (error) {
      console.error("Logout error:", error);

      router.push("/login");
    }
  };

  return { user, isLoading, logout };
}

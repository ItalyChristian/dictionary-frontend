"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { User } from "./types";
import { logoutAction } from "@/actions/auth/auth";
import { getCurrentUser } from "@/actions/auth/user";

export function useAuth() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const fetchUser = useCallback(async () => {
    setIsLoading(true);
    try {
      const userData = await getCurrentUser();

      if (userData) {
        setUser(userData);
        setIsAuthenticated(true);
      } else {
        setUser(null);
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.error("Error fetching user:", error);
      setUser(null);
      setIsAuthenticated(false);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

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

  const refreshUser = useCallback(async () => {
    await fetchUser();
  }, [fetchUser]);

  return { user, isLoading, isAuthenticated, logout, refreshUser };
}

export interface User {
  id: string;
  name: string;
  email: string;
  favorites: string[];
  createdAt: string;
}

export interface UseAuthReturn {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  logout: () => Promise<void>;
  refreshUser: () => Promise<void>;
}

export interface UserResponse {
  id: string;
  name: string;
  email: string;
  favorites: string[];
  createdAt: string;
}

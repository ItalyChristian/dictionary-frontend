import { isAxiosError } from "axios";

export function handleApiError(error: unknown): {
  error: string;
  status?: number;
} {
  if (isAxiosError(error)) {
    const status = error.response?.status;
    const message =
      error.response?.data?.message ||
      error.response?.data?.error ||
      error.message ||
      "Erro desconhecido";

    return { error: String(message), status };
  }

  if (error instanceof Error) {
    return { error: error.message, status: 500 };
  }

  return { error: "Erro desconhecido", status: 500 };
}

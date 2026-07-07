import axios, { AxiosHeaders } from "axios";

import { API_BASE_URL } from "@/utils/constants";
import { getAuthHeaders } from "@/utils/getAuthHeaders";

const httpClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

httpClient.interceptors.request.use(async (config) => {
  const authHeaders = await getAuthHeaders();
  const headers = new AxiosHeaders(config.headers);

  Object.entries(authHeaders as Record<string, string>).forEach(
    ([key, value]) => {
      if (value) {
        headers.set(key, value);
      }
    },
  );

  if (config.method?.toLowerCase() === "delete") {
    headers.delete("Content-Type");
  }

  config.headers = headers;

  return config;
});

export default httpClient;

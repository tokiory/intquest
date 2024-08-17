import { useCallback, useEffect, useState } from "react";

interface FetchOptions extends RequestInit {
  lazy?: boolean;
  json?: boolean;
  baseUrl?: string;
}

type Status = "idle" | "loading" | "success" | "error";

const constructUrl = (baseUrl: string, path: string) => `${baseUrl}${path}`;

export const useFetch = <T>(
  path: string,
  {
    json = true,
    lazy = false,
    baseUrl = import.meta.env.IQ_API_BASE_URL as string,
    ...options
  } = {} as FetchOptions,
) => {
  const [data, setData] = useState<T>();
  const [error, setError] = useState<Error>();
  const [status, setStatus] = useState<Status>("idle");

  const isIdle = status === "idle";
  const isLoading = status === "loading";
  const isError = status === "error";

  const fetchHandler = useCallback(async () => {
    setStatus("loading");
    let data: T;

    try {
      const response = await fetch(constructUrl(baseUrl!, path), options);
      data = response as T;

      if (json) {
        data = await response.json();
      }

      setData(data);
      setStatus("success");
    } catch (error) {
      setError(error as Error);
      setStatus("error");
    }
  }, [options, baseUrl, path, json]);

  useEffect(() => {
    if (!isIdle || lazy) {
      return;
    }

    fetchHandler();
  }, [fetchHandler, lazy, isIdle]);

  return {
    data: data as T,
    error,
    status,
    isLoading,
    isError,
  };
};

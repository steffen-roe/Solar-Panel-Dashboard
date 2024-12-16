import { useState, useEffect } from "react";
import apiClient from "./apiClient";

export default function useApi(range, refreshKey) {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await apiClient.get("/dev/data", {
          params: { range },
        });
        setData(response.data);
      } catch (err) {
        setError("Failed to fetch");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [range, refreshKey]);

  return { data, error, loading };
}

import { useState, useEffect } from 'react'; 
import apiClient from "./apiClient";

export default function useApi(range) {

  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await apiClient.get('/dev/data', {
          params: { range },
        });
        setData(response.data); 
      } catch (err) {
        setError("Failed to fetch")
      }
    };

    fetchData();

  }, [range])

  return { data, error };

}

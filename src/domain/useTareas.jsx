import { useEffect, useState } from "react";
import { getTasks } from "../api/task";

export const useTareas = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getTareas = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await getTasks();

      setData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getTareas();
  }, []);

  return { data, loading, error, getTareas };
};

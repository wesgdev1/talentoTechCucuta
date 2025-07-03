import { useEffect, useState } from "react";
import { getTask, getTasks } from "../api/task";

export const useTarea = (id) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getTarea = async (id) => {
    setLoading(true);
    setError("");

    try {
      const response = await getTask(id);

      setData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getTarea(id);
  }, [id]);

  return { data, loading, error, getTarea };
};

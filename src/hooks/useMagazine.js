import React, { useState, useEffect } from "react";
import axios from "axios";
import { api } from "../../Constants";
export default (magazineId) => {
  const [magazine, setMagazine] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const loadMagazine = async () => {
    setLoading(true);
    try {
      const result = await axios.get(`${api}/api/v1/magazines/${magazineId}`);
      setMagazine(result.data.data);
      setError(null);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };
  useEffect(() => {
    loadMagazine();
  }, []);

  return [magazine, error, loading];
};

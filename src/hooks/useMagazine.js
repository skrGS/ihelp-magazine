import React, { useState, useEffect } from "react";
import axios from "axios";
import { api } from "../../Constants";
export default (magazineId) => {
  const [magazine, setMagazine] = useState(null);
  const [error, setError] = useState(null);
  const loadMagazine = async () => {
    try {
      const result = await axios.get(`${api}/api/v1/magazines/${magazineId}`);
      setMagazine(result.data.data);
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  };
  useEffect(() => {
    loadMagazine();
  }, []);

  return [magazine, error];
};

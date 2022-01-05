import React, { useState, useEffect } from "react";
import axios from "axios";
import { api } from "../../Constants";
export default (SpecialId) => {
  const [special, setSpecial] = useState(null);
  const [error, setError] = useState(null);
  const loadWork = async () => {
    try {
      const result = await axios.get(`${api}/api/v1/specials/${SpecialId}`);
      setSpecial(result.data.data);
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  };
  useEffect(() => {
    loadWork();
  }, []);

  return [special, error];
};

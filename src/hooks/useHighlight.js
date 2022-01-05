import React, { useState, useEffect } from "react";
import axios from "axios";
import { api } from "../../Constants";
export default (highlightId) => {
  const [highlight, setHighlight] = useState(null);
  const [error, setError] = useState(null);
  const loadHighlight = async () => {
    try {
      const result = await axios.get(`${api}/api/v1/highlights/${highlightId}`);
      setHighlight(result.data.data);
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  };
  useEffect(() => {
    loadHighlight();
  }, []);

  return [highlight, error];
};

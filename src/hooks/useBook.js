import React, { useState, useEffect } from "react";
import axios from "axios";
import { api } from "../../Constants";
export default (bookId) => {
  const [book, setBook] = useState(null);
  const [error, setError] = useState(null);
  const loadBook = async () => {
    try {
      const result = await axios.get(`${api}/api/v1/books/${bookId}`);
      setBook(result.data.data);
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  };
  useEffect(() => {
    loadBook();
  }, []);

  return [book, error];
};

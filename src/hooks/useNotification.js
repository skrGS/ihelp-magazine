import React, { useState, useEffect } from "react";
import axios from "axios";

import { api } from "../../Constants";

export default (Id) => {
  const [notification, setNotification] = useState(null);
  const [error, setError] = useState(null);

  const loadNotification = async () => {
    try {
      const result = await axios.get(`${api}/api/v1/notifications/${Id}`);
      // console.log(result.data);
      setNotification(result.data.data);
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    loadNotification();
  }, []);

  return [notification, error];
};

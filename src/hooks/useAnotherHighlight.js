import React, { useState, useEffect } from "react";
import axios from "axios";
import { api } from "../../Constants";
export default (AhighlightId) => {
  const [ahighlight, setAhighlight] = useState(null);
  const [anoHighErr, setAnoHighErr] = useState(null);
  const loadWork = async () => {
    try {
      const result = await axios.get(
        `${api}/api/v1/ahighlights/${AhighlightId}`
      );
      setAhighlight(result.data.data);
      setAnoHighErr(null);
    } catch (err) {
      setAnoHighErr(err.message);
    }
  };
  useEffect(() => {
    loadWork();
  }, []);

  return [ahighlight, anoHighErr];
};

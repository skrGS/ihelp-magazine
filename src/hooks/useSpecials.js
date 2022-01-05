import { useState, useEffect } from "react";
import axios from "axios";
import { api } from "../../Constants";

export default () => {
  const [specials, setSpecials] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get(`${api}/api/v1/specials`)
      .then((result) => {
        setSpecials(result.data.data);
        setErrorMessage(null);
        setLoading(false);
      })
      .catch((err) => {
        let message = err.message;
        if (message === "Request failed with status code 404")
          message = "Уучлаарай сэрвэр дахин ажилуулана уу";
        setErrorMessage(err.message);
        setLoading(false);
      });
  }, []);
  return [specials, errorMessage, loading];
};

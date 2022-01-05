import { useState, useEffect } from "react";
import axios from "axios";
import { api } from "../../Constants";

export default () => {
  const [highlightCats, setHighlightCats] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    axios
      .get(`${api}/api/v1/highlightCats`)
      .then((result) => {
        setHighlightCats(result.data.data);
        setErrorMessage(null);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        let message = err.message;
        if (message === "Request failed with status code 404")
          message = "Уучлаарай сэрвэр дахин ажилуулана уу";
        setErrorMessage(err.message);
      });
  }, []);
  return [highlightCats, errorMessage, loading];
};

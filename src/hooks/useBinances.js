import { useState, useEffect } from "react";
import axios from "axios";
import { api } from "../../Constants";

export default () => {
  const [binances, setBinances] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get(`${api}/api/v1/binances`)
      .then((result) => {
        setBinances(result.data.data);
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
  return [binances, errorMessage, loading];
};

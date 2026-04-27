import { useState, useEffect } from "react";

function useFetch(initState, url) {
  const [data, setData] = useState(initState);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((items) => {
        setData(items);
        setLoading(false);
        setErrorMessage("");
      })
      .catch((err) => {
        setErrorMessage(err.message);
        setLoading(false);
      });
  }, []);

  return {
    data,
    loading,
    errorMessage,
  };
}

export default useFetch;

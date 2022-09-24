import React, { useState, useEffect } from "react";

const axios = require("axios").default;

const FetchDataCustomHook = (initialUrl, initialData) => {
  const [data, setData] = useState(initialData);

  const [isLoading, setIsLoading] = useState(false);
  const [url, setUrl] = useState(initialUrl);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await axios(url);
        setData(result.data);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [url]);
  //console.log(data);
  //const slicedArray = data.slice(0, 5);
  return [{ data, isLoading, isError }, setUrl];
};

export default FetchDataCustomHook;

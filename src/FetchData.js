import React, { useState, useEffect } from "react";
const axios = require("axios").default;
//import axios from 'axios';
const FetchData = () => {
  const [data, setData] = useState({ hits: [] });
  const [query, setQuery] = useState("redux");
  const [isLoading, setIsLoading] = useState(false);
  const [url, setUrl] = useState(
    "https://hn.algolia.com/api/v1/search?query=redux"
  );
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

  const changeQuery = (event) => {
    // console.log(event.target.value);
    setQuery(event.target.value);
  };

  const changeUrl = () => {
    setUrl(`http://hn.algolia.com/api/v1/search?query=${query}`);
    //setSearch(query);
  };

  //   useEffect(async () => {
  //     const result = await axios(
  //       "https://hn.algolia.com/api/v1/search?query=redux"
  //     );

  //     setData(result.data);
  //   });

  return (
    <>
      <input type="text" value={query} onChange={changeQuery} />
      <button type="button" onClick={changeUrl}>
        Search
      </button>
      {isError && <div>Error ...</div>}
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <ul>
          {data.hits.map((item) => (
            <li key={item.objectID}>
              <a href={item.url}>{item.title}</a>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default FetchData;

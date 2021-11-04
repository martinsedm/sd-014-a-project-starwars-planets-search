import { useState, useEffect } from 'react';

export default function useApi() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    setIsLoading(true);
    const fetchApi = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const response = await fetchApi.json();
    const apiResults = response.results;
    setData(apiResults);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, isLoading };
}

// https://stackoverflow.com/questions/60209671/asynchronous-context-with-useeffect-in-react

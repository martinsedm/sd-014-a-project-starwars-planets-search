import { useEffect, useState } from 'react';

export default function useApi(api) {
  const [data, setData] = useState([{}]);

  useEffect(() => {
    const fetchApi = async () => {
      const response = await fetch(api);
      const responseJSON = await response.json();
      const { results } = responseJSON;
      setData(results);
    };
    fetchApi();
  }, [api]);

  return { data };
}

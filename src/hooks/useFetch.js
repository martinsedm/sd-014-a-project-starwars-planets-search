import { useEffect, useState } from 'react';

export default function useFetch(urlProv = '') {
  const [planets, setPlanets] = useState([]);
  const [url, setUrl] = useState(urlProv);

  useEffect(() => {
    const fetchRequest = async (urlParam) => {
      const request = await fetch(urlParam);
      const json = await request.json();
      return json;
    };
    return setPlanets(fetchRequest(url).results);
  }, [url]);

  return [planets, setUrl];
}

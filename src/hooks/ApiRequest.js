import { useState, useEffect } from 'react';

export default function ApiRequest(URL) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(false);

    const fetchData = async () => {
      try {
        const result = await fetch(URL);
        const json = await result.json();
        const finalData = await json.results;
        setData(finalData);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [URL]);

  return { data, error, loading };
}

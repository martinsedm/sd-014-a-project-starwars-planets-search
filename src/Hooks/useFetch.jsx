import { useEffect, useState } from 'react';

function useFetch() {
  const [data, setData] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((response) => response.json())
      .then((planetsAPI) => {
        const planets = planetsAPI.results.map((planet) => {
          delete planet.residents;
          return planet;
        });
        setData(planets);
        setLoaded(true);
      });
  }, []);
  return [data, setData, loaded];
}

// Obrigado ao querido @LuizFJP.

export default useFetch;

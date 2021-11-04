const PLANETS_URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

const fetchPlanets = async () => {
  const response = await fetch(PLANETS_URL);
  return (
    response.ok ? Promise.resolve(response.json()) : Promise.reject(response.json())
  );
};

export default fetchPlanets;

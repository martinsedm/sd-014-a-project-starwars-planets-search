const URL_PLANETS_API = 'https://swapi-trybe.herokuapp.com/api/planets/';

const fetchPlanets = async () => {
  const getPlanets = await fetch(URL_PLANETS_API);
  const data = await getPlanets.json();
  return data.results;
};

export default fetchPlanets;

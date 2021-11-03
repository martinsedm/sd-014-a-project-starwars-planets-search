const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';

const fetchApiPlanets = async () => {
  const api = await fetch(endpoint);
  const result = await api.json();
  result.results.filter((planets) => delete planets.residents);
  return result;
};

export default fetchApiPlanets;

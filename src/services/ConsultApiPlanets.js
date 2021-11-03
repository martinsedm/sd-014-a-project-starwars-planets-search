const ColsultApiPlanets = async () => {
  const api = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const json = await api.json();
  json.results.filter((planets) => delete planets.residents);
  return json;
};

export default ColsultApiPlanets;

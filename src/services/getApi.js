const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

const getApi = async () => {
  const response = await fetch(URL);
  const { results } = await response.json();
  results.forEach((planet) => delete planet.residents);
  return results;
};

export default getApi;

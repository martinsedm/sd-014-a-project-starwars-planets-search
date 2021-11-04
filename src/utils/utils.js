const url = 'https://swapi-trybe.herokuapp.com/api/planets/';

async function fetchAPI() {
  const api = await fetch(url);
  const result = await api.json();

  result.results.filter((planets) => delete planets.residents);

  return result;
}

export default fetchAPI;

const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

async function Api() {
  const fetchPlanet = await fetch(URL);
  const resultadoApi = await fetchPlanet.json();
  const { results } = resultadoApi;
  const exclui = results.filter((result) => delete result.residents);

  return exclui;
}

export default Api;

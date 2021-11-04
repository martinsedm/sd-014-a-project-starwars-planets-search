const URL_PLANETS = 'https://swapi-trybe.herokuapp.com/api/planets/';

async function getPlanets() {
  const result = await fetch(URL_PLANETS);
  const resultJson = await result.json();
  const { results } = resultJson;
  results.forEach((planet) => delete planet.residents);
  return results;
}

export default getPlanets;

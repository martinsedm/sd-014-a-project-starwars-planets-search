export default async function getPlanetInfo() {
  const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const data = await response.json();
  const { results } = data;
  results.forEach((planet) => delete planet.residents);
  return results;
}

export default async function requestAPI() {
  const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const planets = await response.json();
  return planets.results;
}

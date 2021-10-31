export default async function requestAPI() {
  const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const planets = (response.results).json();
  return planets;
}

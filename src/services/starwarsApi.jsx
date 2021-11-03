export default async function getAllPlanets() {
  const apiUrl = 'https://swapi-trybe.herokuapp.com/api';
  const response = await fetch(`${apiUrl}/planets`);
  const data = await response.json();
  return data.results;
}

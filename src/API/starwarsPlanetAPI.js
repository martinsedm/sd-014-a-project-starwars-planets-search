export default async function getPlanetsAPI() {
  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const fetchAPI = await fetch(url);
  const response = await fetchAPI.json();
  return response;
}

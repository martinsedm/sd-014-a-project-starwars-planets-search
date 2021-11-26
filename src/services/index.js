async function fetchApi() {
  const urlPlanets = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const response = await fetch(urlPlanets);
  const data = await response.json();
  return data;
}

export default fetchApi;

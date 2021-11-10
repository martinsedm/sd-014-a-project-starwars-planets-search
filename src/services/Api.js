const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

async function fetchPlanetList(setPlanets) {
  const fetchAPI = await fetch(URL);
  const data = await fetchAPI.json();
  setPlanets(data.results);
}

export default fetchPlanetList;

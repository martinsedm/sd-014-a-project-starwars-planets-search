async function getPlanets() {
  const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const response = await fetch(URL);
  const data = response.json();
  return data;
}

export default getPlanets;

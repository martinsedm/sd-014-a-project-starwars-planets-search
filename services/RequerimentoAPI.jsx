const ENDPOINT_STAR_WARS_API = 'https://swapi-trybe.herokuapp.com/api/planets/';

async function requestAPI() {
  const resp = await fetch(ENDPOINT_STAR_WARS_API);
  const planets = resp.json();
  return planets;
}

export default requestAPI;

export default function getIdFromURL(planet) {
  const URL_BASE = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const URLPlanet = planet.url;
  const id = URLPlanet.replace(URL_BASE, '').replace('/', '');
  return id;
}

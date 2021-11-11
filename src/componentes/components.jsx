// Aquisição dos planetas da Api do StarWars

const LINK_API_STARWARS_PLANET = 'https://swapi-trybe.herokuapp.com/api/planets';

const ApiStarWarsPlanet = async () => {
  const response = await fetch(LINK_API_STARWARS_PLANET);
  const Data = await response.json();
  return Data.results;
};

export default ApiStarWarsPlanet;

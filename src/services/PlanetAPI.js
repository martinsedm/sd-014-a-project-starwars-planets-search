const PLANET_BASE_API = 'https://swapi-trybe.herokuapp.com';

export const PlanetAPI = async () => {
  const response = await fetch(`${PLANET_BASE_API}/api/planets/`);
  const json = await response.json();
  const { results } = json;
  return [...results];
};

export default PlanetAPI;

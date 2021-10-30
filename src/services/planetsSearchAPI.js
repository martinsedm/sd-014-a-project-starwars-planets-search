const PLANETS_ENDPOINT = 'https://swapi-trybe.herokuapp.com/api/planets/';

const getPlanetsList = async () => {
  const response = await fetch(PLANETS_ENDPOINT);
  const { results } = await response.json();
  return results.map((planet) => {
    const { residents, ...correctInfo } = planet;
    return correctInfo;
  });
};

export default getPlanetsList;

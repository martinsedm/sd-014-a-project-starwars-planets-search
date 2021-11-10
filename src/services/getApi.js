const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

const getApi = async () => {
  const response = await fetch(URL);
  const planets = await response.json();
  const result = planets.results.map((planet) => {
    delete planet.residents;
    return planet;
  });
  return result;
};

export default getApi;

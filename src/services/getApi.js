const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

const getApi = async () => {
  const response = await fetch(URL);
  const planets = response.json();
  return planets;
};

export default getApi;

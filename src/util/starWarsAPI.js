const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

const requestPlanets = async () => {
  const response = await fetch(URL);
  const jsonResponse = await response.json();
  return jsonResponse.results;
};

export default requestPlanets;

const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

const requestPlanets = async () => {
  const response = await fetch(URL);
  if (response.ok) {
    const jsonResponse = response.json();
    return jsonResponse.results;
  }
  const error = response.error.message;
  return error;
};

export default requestPlanets;

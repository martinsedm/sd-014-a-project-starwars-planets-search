const ENDPOINT = 'https://swapi-trybe.herokuapp.com/api/planets/';

const fetchPlanetsInfo = async () => {
  const result = await fetch(ENDPOINT);
  const jsonResult = await result.json();
  const { results } = jsonResult;
  return results;
};

export default fetchPlanetsInfo;

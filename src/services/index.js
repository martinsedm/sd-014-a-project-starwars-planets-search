const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

const fetchPlanets = async () => {
  const request = await fetch(URL);
  const data = await request.json();
  return data;
};

export default fetchPlanets;

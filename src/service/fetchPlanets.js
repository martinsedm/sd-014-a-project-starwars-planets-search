const API_URL = 'https://swapi-trybe.herokuapp.com/api';

const fetchPlanets = async () => {
  const response = await fetch(`${API_URL}/planets`);
  const data = await response.json();
  return data.results;
};

export default fetchPlanets;

const API_BASE_URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

const getData = async () => {
  const response = await fetch(API_BASE_URL);
  const data = await response.json();
  return data;
};

export default getData;

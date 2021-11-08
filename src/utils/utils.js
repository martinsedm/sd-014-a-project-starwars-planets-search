const url = 'https://swapi-trybe.herokuapp.com/api/planets/';

const fetchAPI = async () => {
  const api = await fetch(url);
  const result = await api.json();

  return result;
};

export default fetchAPI;

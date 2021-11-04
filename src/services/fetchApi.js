const fetchPlanetApi = async () => {
  const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const json = await response.json();
  return json;
};

export default fetchPlanetApi;

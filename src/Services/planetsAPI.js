const planetsAPI = async () => {
  const requisitions = fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const planets = await requisitions;
  const data = await planets.json();
  return data;
};

export default planetsAPI;

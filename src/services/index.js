const fetchPlanets = async () => {
  const planetsRaw = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const planetsData = await planetsRaw.json();
  return planetsData.results;
};

export default fetchPlanets;

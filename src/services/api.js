const requisitionPlanets = async () => {
  const fetchPlanets = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const planetsJson = await fetchPlanets.json();
  return planetsJson.results;
};

export default requisitionPlanets;

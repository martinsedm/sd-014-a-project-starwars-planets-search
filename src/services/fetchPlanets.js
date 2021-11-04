const fetchApiPlanets = async () => {
  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const response = await fetch(url).then((res) => res.json());
  response.results.forEach((el) => delete el.residents);
  return response.results;
};

const Allplanets = async () => {
  const PLANETS = JSON.parse(localStorage.getItem('planets'));
  if (PLANETS) {
    return PLANETS;
  }
  const PLANETSAPI = await fetchApiPlanets();
  localStorage.setItem('planets', JSON.stringify(PLANETSAPI));
  return PLANETSAPI;
};

export default Allplanets;

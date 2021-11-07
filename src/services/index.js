export const fetchPlanets = async () => {
  const planetsRaw = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const planetsData = await planetsRaw.json();
  return planetsData.results;
};

export const megaFilter = (column, comparison, value, planets) => {
  switch (comparison) {
  case 'maior que':
    return planets.filter((planet) => Number(planet[column]) > Number(value));
  case 'menor que':
    return planets.filter((planet) => Number(planet[column]) < Number(value));
  case 'igual a':
    return planets.filter((planet) => Number(planet[column]) === Number(value));
  default:
    return planets;
  }
};

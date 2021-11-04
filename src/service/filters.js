const filterName = (listPlanets, name) => {
  const planetsFiltredByName = listPlanets.filter((planet) => planet.name.includes(name));
  return planetsFiltredByName;
};

const filterByNumeric = (listPlanets, listFilterNumeric) => {
  let planets = listPlanets;
  listFilterNumeric.forEach((filter) => {
    switch (filter.comparison) {
    case 'maior que':
      planets = planets.filter((planet) => (
        Number(planet[filter.column]) > Number(filter.value)));
      break;
    case 'menor que':
      planets = planets.filter((planet) => (
        Number(planet[filter.column]) < Number(filter.value)));
      break;
    case 'igual a':
      planets = planets.filter((planet) => (
        Number(planet[filter.column]) === Number(filter.value)));
      break;
    default:
      break;
    }
  });
  return planets;
};

const orderPlanets = (listPlanets, orderObj) => {
  const { column, sort } = orderObj;
  const NUMBER_FOR_SORT = -1;
  switch (sort) {
  case 'ASC':
    return listPlanets.sort((a, b) => {
      if (a[column] < b[column]) {
        return NUMBER_FOR_SORT;
      }
      if (a[column] > b[column]) {
        return 0;
      }
      return 0;
    });
  case 'DSC':
    return listPlanets.sort((a, b) => {
      if (a[column] > b[column]) {
        return NUMBER_FOR_SORT;
      }
      if (a[column] < b[column]) {
        return 0;
      }
      return 0;
    });
  default:
    break;
  }
};

export const filterAll = (setPlannet, objFilter, list) => {
  const { filterByName } = objFilter;
  const filtredByName = filterName([...list], filterByName.name);
  const filtredNumeric = filterByNumeric(filtredByName, objFilter.filterByNumericValues);
  const PlanetsFiltredOrderly = orderPlanets(filtredNumeric, objFilter.order);
  setPlannet(PlanetsFiltredOrderly);
};

export const getKeysNumeric = (obj) => {
  const objKeys = Object.keys(obj);
  const keysListNumeric = objKeys.filter((keyObj) => Number(obj[keyObj]));
  return keysListNumeric;
};

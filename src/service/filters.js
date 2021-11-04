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

const sortStringAsc = (list, itemColumn) => {
  const NUMBER_FOR_SORT = -1;
  return list.sort((a, b) => {
    if (a[itemColumn] < b[itemColumn]) {
      return NUMBER_FOR_SORT;
    }
    if (a[itemColumn] > b[itemColumn]) {
      return 0;
    }
    return 0;
  });
};

const sortStringDsc = (list, itemColumn) => {
  const NUMBER_FOR_SORT = -1;
  return list.sort((a, b) => {
    if (a[itemColumn] > b[itemColumn]) {
      return NUMBER_FOR_SORT;
    }
    if (a[itemColumn] < b[itemColumn]) {
      return 0;
    }
    return 0;
  });
};

const orderPlanets = (listPlanets, orderObj) => {
  const columnValue = listPlanets.length > 0 ? listPlanets[0][orderObj.column]
    : null;
  const { column, sort } = orderObj;
  switch (sort) {
  case 'ASC':
    if (Number.isNaN(Number(columnValue))) {
      console.log('strin');
      return sortStringAsc(listPlanets, column);
    }
    console.log('number');
    return listPlanets.sort((a, b) => a[column] - b[column]);

  case 'DSC':
    if (Number.isNaN(Number(columnValue))) {
      return sortStringDsc(listPlanets, column);
    }
    return listPlanets.sort((a, b) => b[column] - a[column]);
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

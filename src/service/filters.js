const filterName = (listPlanets, name) => {
  const planetsFiltredByName = listPlanets.filter((planet) => planet.name.includes(name));
  return planetsFiltredByName;
};

// const filterByNumeric = (listPlanets, listFilter) => {
// logica para percorrer array que esta em filterByNumericValues e ir filtrando o array.
// };

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

const filterAll = (setPlannet, objFilter, list) => {
  const { filterByName } = objFilter;
  const filtredByName = filterName([...list], filterByName.name);
  // filter by numericValues
  const PlanetsFiltredOrderly = orderPlanets(filtredByName, objFilter.order);
  setPlannet(PlanetsFiltredOrderly);
};

export default filterAll;

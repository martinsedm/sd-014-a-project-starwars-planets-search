export const columnOptions = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

export const fetchPlanets = async () => {
  try {
    const request = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const list = await request.json();
    return list.results;
  } catch (e) {
    console.log(`Erro ao requsitar lista de planetas ==> ${e}`);
  }
};

export const sortByText = (list, column) => {
  const MINUS_ONE = -1;
  return list.sort((a, b) => {
    const columnA = a[column].toUpperCase();
    const columnB = b[column].toUpperCase();
    if (columnA < columnB) {
      return MINUS_ONE;
    }
    if (columnA > columnB) {
      return 1;
    }
    return 0;
  });
};

export const sortByNumber = (list, direction, column) => {
  if (direction === 'asc') {
    return list.sort((a, b) => a[column] - b[column]);
  }
  if (direction === 'desc') {
    return list.sort((a, b) => b[column] - a[column]);
  }
};

export const checkIfHasToSort = (hasSortFilter, list, { column, sort }) => {
  if (hasSortFilter) {
    return sortByNumber(list, sort, column);
  }

  return sortByText(list, 'name');
};

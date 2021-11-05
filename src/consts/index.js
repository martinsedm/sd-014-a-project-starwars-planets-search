export const types = {
  dataTestid: 'column-filter',
  options: [
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'],
  name: 'column',
};

export const comparisonFilter = {
  dataTestid: 'comparison-filter',
  options: ['maior que', 'menor que', 'igual a'],
  name: 'comparison',
};

export const filterInit = {
  filterByName: { },
  filterByNumericValues: [{
    column: types.options[0],
    comparison: comparisonFilter.options[0],
    value: '0' }],
};

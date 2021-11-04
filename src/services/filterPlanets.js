export function filterByName(array, search) {
  const result = array.filter((elem) => elem.name.toLowerCase()
    .includes(search.toLowerCase()));
  return result;
}

export function filterByNumericOptions(colum, comparison, value) {
  switch (comparison) {
  case 'maior que':
    return value < colum;
  case 'menor que':
    return value > colum;
  case 'igual a':
    return value === colum;
  default:
    return 0;
  }
}

export function filterByNumericValues(array, colum, comparison, value) {
  const result = array.filter((elem) => filterByNumericOptions(
    Number(elem[colum]),
    comparison,
    Number(value),
  ));
  return result;
}

export const numeroDaHora = 10;

export default filterByName;

export function filterData(data, arrayOfFilters) {
  return arrayOfFilters
    .map(({ column, comparison, value }) => data
      .filter((planet) => {
        if (!value) return planet;
        if (comparison === 'maior que') {
          return Number(planet[column]) > Number(value);
        }
        if (comparison === 'menor que') {
          return Number(planet[column]) < Number(value);
        }
        if (comparison === 'igual a') return planet[column] === value;
        return planet;
      }))
    .reduce((acc, curr) => {
      if (curr !== undefined) {
        return acc.filter((planet) => curr.includes(planet));
      }
      return acc;
    });
}

// Usei como referência: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

const MENOS_UM = -1;

export function sortTextColumns(order, arrayToBeSorted) {
  if (order.sort === 'ASC') {
    return arrayToBeSorted.sort((a, b) => {
      if (a[order.column] > b[order.column]) return 1;
      if (a[order.column] < b[order.column]) return MENOS_UM;
      return 0;
    });
  }
  if (order.sort === 'DESC') {
    return arrayToBeSorted.sort((a, b) => {
      if (a[order.column] > b[order.column]) return MENOS_UM;
      if (a[order.column] < b[order.column]) return 1;
      return 0;
    });
  }
}

export function sortNumericColumns(order, arrayToBeSorted) {
  if (order.sort === 'ASC') {
    return arrayToBeSorted
      .sort((a, b) => Number(a[order.column]) - Number(b[order.column]));
  }
  if (order.sort === 'DESC') {
    return arrayToBeSorted
      .sort((a, b) => Number(b[order.column]) - Number(a[order.column]));
  }
}

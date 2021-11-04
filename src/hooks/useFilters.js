import { useState, useCallback } from 'react';

export const MAIOR = 'maior que';
export const MENOR = 'menor que';
export const IGUAL = 'igual a';
export const ASC = 'ASC';
export const DES = 'DESC';

const NEG_ONE = -1;

function compare(a, b) {
  if (Number.isNaN(parseInt(a, 10))) {
    if (a < b) return NEG_ONE;
    if (a > b) return 1;
    return 0;
  }
  if (Number(a) < Number(b)) return NEG_ONE;
  if (Number(a) > Number(b)) return 1;
  return 0;
}

export function useFilters(initialState) {
  const [array, setArray] = useState(initialState);

  const applyFilters = useCallback((planets, filters) => {
    let filteredArray = [...planets];
    const {
      filterByName: { name },
      filterByNumericValues,
      order,
    } = filters;
    if (name !== '') {
      const regex = new RegExp(name, 'ig');
      filteredArray = filteredArray
        .filter((planet) => planet.name.search(regex) >= 0);
    }
    if (filterByNumericValues.length > 0 && filteredArray.length > 0) {
      filterByNumericValues.forEach((filter) => {
        const { column, comparison, value } = filter;
        switch (comparison) {
        case MAIOR:
          filteredArray = filteredArray
            .filter((planet) => Number(planet[column]) > Number(value));
          break;
        case MENOR:
          filteredArray = filteredArray
            .filter((planet) => Number(planet[column]) < Number(value));
          break;
        case IGUAL:
          filteredArray = filteredArray
            .filter((planet) => Number(planet[column]) === Number(value));
          break;
        default:
          break;
        }
      });
    }
    if (filteredArray.length > 0) {
      const { column, sort } = order;
      switch (sort) {
      case ASC:
        filteredArray = filteredArray.sort((a, b) => compare(a[column], b[column]));
        break;
      case DES:
        filteredArray = filteredArray.sort((a, b) => compare(b[column], a[column]));
        break;
      default:
        break;
      }
    }
    setArray(filteredArray);
  }, []);

  return [array, applyFilters];
}

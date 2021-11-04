import { useState, useCallback } from 'react';

export const MAIOR = 'maior que';
export const MENOR = 'menor que';
export const IGUAL = 'igual a';

export function useFilters(initialState) {
  const [array, setArray] = useState(initialState);

  const applyFilters = useCallback((planets, filters) => {
    let filteredArray = [...planets];
    const {
      filterByName: { name },
      filterByNumericValues,
    } = filters;
    if (name !== '') {
      const regex = new RegExp(name, 'ig');
      filteredArray = filteredArray
        .filter((planet) => planet.name.search(regex) >= 0);
    }
    if (filterByNumericValues.length > 0) {
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
    setArray(filteredArray);
  }, []);

  return [array, applyFilters];
}

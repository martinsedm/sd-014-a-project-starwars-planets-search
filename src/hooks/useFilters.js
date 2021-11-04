import { useState, useCallback } from 'react';

const MAIOR = 'maior que';
const MENOR = 'menor que';
const IGUAL = 'igual a';

function useFilters(initialState) {
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
        .filter((planet) => planet.name.search(regex) > 0);
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
          console.log('deu ruim');
        }
      });
    }
    setArray(filteredArray);
  }, []);

  return [array, applyFilters];
}

export default useFilters;

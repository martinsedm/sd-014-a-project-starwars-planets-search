import { useState, useCallback } from 'react';

function useFilters(initialState) {
  const [array, setArray] = useState(initialState);

  const applyFilters = useCallback((planets, filters) => {
    let filteredArray = [...planets];
    const {
      filterByName: { name },
      // filterByNumericValues,
    } = filters;
    if (name !== '') {
      const regex = new RegExp(name, 'ig');
      filteredArray = filteredArray
        .filter((planet) => planet.name.search(regex) > 0);
    }
    setArray(filteredArray);
  }, []);

  return [array, applyFilters];
}

export default useFilters;

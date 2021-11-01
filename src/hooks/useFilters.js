import { useState, useCallback } from 'react';

const useFilters = () => {
  const [name, setName] = useState('');
  const [numeric, setNumeric] = useState([]);

  return [
    {
      name,
      numeric,
    },
    {
      byName: useCallback((planet) => setName(planet), []),
      byNumeric: useCallback((filter) => setNumeric((prevState) => (
        [...prevState, filter]
      )), []),
      removeNumericFilter: useCallback((column) => setNumeric(
        (prevState) => prevState.filter((filter) => filter.column !== column),
      ), []),
    },
  ];
};

export default useFilters;

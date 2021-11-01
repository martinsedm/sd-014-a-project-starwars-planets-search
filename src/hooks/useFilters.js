import { useState, useCallback } from 'react';

const useFilters = () => {
  const [name, setName] = useState('');
  const [numeric, setNumeric] = useState([]);
  const [order, setOrder] = useState({
    column: 'name',
    sort: 'ASC',
  });

  return [
    {
      name,
      numeric,
      order,
    },
    {
      byName: useCallback((planet) => setName(planet), []),
      byNumeric: useCallback((filter) => setNumeric((prevState) => (
        [...prevState, filter]
      )), []),
      byOrder: useCallback((orderFilter) => setOrder(orderFilter), []),
      removeNumericFilter: useCallback((column) => setNumeric(
        (prevState) => prevState.filter((filter) => filter.column !== column),
      ), []),
    },
  ];
};

export default useFilters;

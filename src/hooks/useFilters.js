import { useState, useCallback } from 'react';

const useFilters = () => {
  const [name, setName] = useState('');

  return {
    name,
    filterByName: useCallback((planet) => setName(planet)),
  };
};

export default useFilters;

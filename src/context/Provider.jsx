import React, { useState, useEffect } from 'react';
import AppContext from './AppContext';
import starwarsApi from '../services/starwarsApi';

function Provider({ children }) {
  const [filters, setFilters] = useState(
    {
      filterByName: {
        name: '',
      },
      filterByNumericValues: [
        {
          column: 'population',
          comparison: 'maior que',
          value: '0',
        },
      ] },
  );
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const [dataFiltered, setDataFiltered] = useState([]);

  const dataApiUpdate = async () => {
    const response = await starwarsApi();
    setData(response);
    setIsLoading(false);
  };

  useEffect(() => { dataApiUpdate(); }, []);

  const contextValue = {
    filters,
    setFilters,
    data,
    setData,
    isLoading,
    setIsLoading,
  };

  return (
    <AppContext.Provider value={ contextValue }>
      {children}
    </AppContext.Provider>
  );
}

export default Provider;

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
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
  const [listColumn, setListColumn] = useState(
    ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'],
  );

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
    listColumn,
    setListColumn,
  };

  return (
    <AppContext.Provider value={ contextValue }>
      {children}
    </AppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;

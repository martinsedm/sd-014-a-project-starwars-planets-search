import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import StarsContext from './myContext';
import fetchData from '../utils/getAPI';

function StarsProvider({ children }) {
  const [planetas, setPlanet] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilter] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [],
    order: {
      column: 'name',
      sort: 'ASC',
    },
  });

  const [numericFilter, setNumericFilter] = useState([{
    caracteristic: '',
    comparison: '',
    value: 0,
  }]);

  const getPlanetsAPI = useCallback(async () => {
    setIsLoading(true);
    const planets = await fetchData();
    setPlanet(planets);
    setIsLoading(false);
  }, [setPlanet, setIsLoading]);

  useEffect(() => {
    getPlanetsAPI();
  }, [getPlanetsAPI]);

  const contextValue = {
    getPlanetsAPI,
    isLoading,
    setIsLoading,
    numericFilter,
    setNumericFilter,
    filters,
    setFilter,
    planetas,
    setPlanet,
  };

  return (
    <StarsContext.Provider value={ contextValue }>
      {children}
    </StarsContext.Provider>
  );
}

StarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarsProvider;

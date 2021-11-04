import PropTypes from 'prop-types';
import React, { useState } from 'react';
import DataContext from './DataContext';

const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const FetchApi = async () => {
    setIsLoading(true);
    const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const planets = await response.json();
    const resultsApi = planets.results;

    setData(resultsApi);
    setIsLoading(false);
  };

  return (
    <DataContext.Provider value={ { data, isLoading, FetchApi } }>
      { children }
    </DataContext.Provider>
  );
};

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DataProvider;

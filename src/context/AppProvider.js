import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

export default function AppProvider({ children }) {
  const [data, setData] = useState([]);
  const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets';

  async function getData() {
    const response = await fetch(endpoint);
    const { results } = await response.json();
    const resultsFiltered = results.filter((result) => delete result.residents);
    setData(resultsFiltered);
  }

  useEffect(() => {
    getData();
  }, []);

  const contextValue = {
    data,
  };

  return (
    <AppContext.Provider value={ contextValue }>
      { children }
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

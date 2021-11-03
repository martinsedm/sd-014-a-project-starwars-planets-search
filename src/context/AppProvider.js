import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

function Provider({ children }) {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets');
    const { results } = await response.json();
    const resultsFiltered = results.filter((result) => delete result.residents);
    return setData(resultsFiltered);
  };

  useEffect(() => getData(), []);

  const contextValue = {
    data,
  };

  return (
    <AppContext.Provider value={ contextValue }>
      {children}
    </AppContext.Provider>
  );
}

export default Provider;

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

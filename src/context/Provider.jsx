import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

// eslint-disable-next-line react/prop-types
function Provider({ children }) {
  const [results, setResults] = useState([]);
  const contextValue = {
    results,
    setResults,
  };

  return (
    <AppContext.Provider value={ contextValue }>
      {children}
    </AppContext.Provider>
  );
}

Provider.defaultTypes = {
  children: PropTypes.node,
};

export default Provider;

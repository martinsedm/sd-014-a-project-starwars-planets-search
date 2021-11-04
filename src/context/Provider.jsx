import React, { useState } from 'react';
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

export default Provider;

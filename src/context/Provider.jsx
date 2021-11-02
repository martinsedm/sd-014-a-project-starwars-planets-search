import React, { useState } from 'react';
import Context from './Context';

function Provider({children}) {
  const [data, setData] = useState([]);

  const contextValue = { data: { ...data }, setData };

  return (
    <Context.Provider value={ contextValue }>
      { children }
    </Context.Provider>
  );
}

export default Provider;

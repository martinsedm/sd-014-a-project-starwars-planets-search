import React, { useState } from 'react';
import P from 'prop-types';
import GlobalContext from '.';

function GlobalContextProvider({ children }) {
  const [data, setData] = useState({});

  const getData = async () => {
    const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/?format=json');
    const json = await response.json();
    setData(json);
  };

  return (
    <GlobalContext.Provider
      value={ {
        data,
        getData,
      } }
    >
      {children}
    </GlobalContext.Provider>
  );
}

GlobalContextProvider.propTypes = {
  children: P.node.isRequired,
};

export default GlobalContextProvider;

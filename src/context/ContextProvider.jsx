import React, { useState, useEffect } from 'react';
import P from 'prop-types';
import GlobalContext from './context';

function GlobalContextProvider({ children }) {
  const [data, setData] = useState();
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
  });
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const json = await response.json();
    setData(json);
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <GlobalContext.Provider
      value={ {
        data,
        isLoading,
        getData,
        filters,
        setFilters,
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

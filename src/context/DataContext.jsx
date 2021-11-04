import React, { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const DataContext = createContext();

function DataContextProvider({ children }) {
  const [apiData, setData] = useState();

  useEffect(() => {
    async function fetchPlanetData() {
      const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const data = await response.json();
      const { results } = data;
      results.forEach((planet) => delete planet.residents);
      setData(results);
    }
    fetchPlanetData();
  }, []);

  return (
    <DataContext.Provider
      value={ {
        apiData,
        setData,
      } }
    >
      { children }
    </DataContext.Provider>
  );
}

export function useDataContext() {
  const context = useContext(DataContext);
  return context;
}

DataContextProvider.propTypes = {
  children: PropTypes.node,
}.isRequised;

export default DataContextProvider;

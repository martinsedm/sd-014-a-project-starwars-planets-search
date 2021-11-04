import React, { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const DataContext = createContext();

function DataContextProvider({ children }) {
  const [apiData, setData] = useState();
  const [filteredData, setFilteredData] = useState();
  const [nameText, setNameText] = useState('');
  const filters = {
    filters: {
      nameFilter: nameText,
    },
  };

  useEffect(() => {
    async function fetchPlanetData() {
      const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const data = await response.json();
      const { results } = data;
      results.forEach((planet) => delete planet.residents);
      setData(results);
      setFilteredData(response);
    }
    fetchPlanetData();
  }, []);

  return (
    <DataContext.Provider
      value={ {
        apiData,
        setData,
        nameText,
        setNameText,
        filteredData,
        setFilteredData,
        filters,
      } }
    >
      { children }
    </DataContext.Provider>
  );
}

export function useDataContext() {
  const { apiData, setData } = useContext(DataContext);
  return { apiData, setData };
}

export function useFilteredData() {
  const { filteredData, setFilteredData } = useContext(DataContext);
  return { filteredData, setFilteredData };
}

export function useFilters() {
  const { filters } = useContext(DataContext);
  return filters;
}

export function useNameFilter() {
  const { nameText, setNameText } = useContext(DataContext);
  return { nameText, setNameText };
}

DataContextProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default DataContextProvider;

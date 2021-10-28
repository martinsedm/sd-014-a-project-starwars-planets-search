import React, { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import getPlanetInfo from '../services/starAPI';

const DataContext = createContext();

export default function DataContextProvider({ children }) {
  const [apiDataRaw, setData] = useState();
  const [dataFiltered, setDataFiltered] = useState();
  const [name, setName] = useState('');
  const filters = {
    filters: {
      filterByName: name,
    },
  };

  useEffect(() => {
    async function fetchUrl() {
      const response = await getPlanetInfo();
      setData(response);
      setDataFiltered(response);
    }
    fetchUrl();
  }, []);

  return (
    <DataContext.Provider
      value={ {
        apiDataRaw,
        setData,
        name,
        setName,
        dataFiltered,
        setDataFiltered,
        filters,
      } }
    >
      { children }
    </DataContext.Provider>
  );
}

export function useData() {
  const { apiDataRaw, setData } = useContext(DataContext);
  return { apiDataRaw, setData };
}

export function useDataFiltered() {
  const { dataFiltered, setDataFiltered } = useContext(DataContext);
  return { dataFiltered, setDataFiltered };
}

export function useFilters() {
  const { filters } = useContext(DataContext);
  return filters;
}

export function useFilterByName() {
  const { name, setName } = useContext(DataContext);
  return { name, setName };
}

DataContextProvider.propTypes = {
  children: PropTypes.node,
}.isRequised;

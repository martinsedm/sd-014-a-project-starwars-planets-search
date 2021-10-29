import React, { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import getPlanetInfo from '../services/starAPI';

const DataContext = createContext();

export default function DataContextProvider({ children }) {
  const [apiDataRaw, setData] = useState();
  const [dataFiltered, setDataFiltered] = useState();
  const [name, setName] = useState('');
  const [numericValue, setNumericValue] = useState([]);
  const [order, setOrder] = useState({ column: 'name', sort: 'ASC' });
  const filters = {
    filters: {
      filterByName: name,
      filterByNumericValue: numericValue,
      order,
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
        numericValue,
        setNumericValue,
        order,
        setOrder,
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

export function useFiltersInfo() {
  const { filters } = useContext(DataContext);
  return filters;
}

export function useFilterByName() {
  const { name, setName } = useContext(DataContext);
  return { name, setName };
}

export function useFilterByNumericValue() {
  const { numericValue, setNumericValue } = useContext(DataContext);
  return { numericValue, setNumericValue };
}

export function useFilterByOrder() {
  const { order, setOrder } = useContext(DataContext);
  return { order, setOrder };
}

DataContextProvider.propTypes = {
  children: PropTypes.node,
}.isRequised;

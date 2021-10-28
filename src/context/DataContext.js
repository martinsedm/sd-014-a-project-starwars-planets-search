import React, { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import getPlanetInfo from '../services/starAPI';

const DataContext = createContext();

export default function DataContextProvider({ children }) {
  const [apiDataRaw, setData] = useState();

  useEffect(() => {
    async function fetchUrl() {
      const response = await getPlanetInfo();
      setData(response);
    }
    fetchUrl();
  }, []);

  return (
    <DataContext.Provider
      value={ {
        apiDataRaw,
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

import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import DataContext from './DataContext';
import FetchApi from '../services/FetchApi';

const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filter, setFilter] = useState({
    filters: {
      filterByName: {
        name: '',
      },
    },
  });

  useEffect(() => {
    setIsLoading(true);
    const ApiStarWars = async () => {
      const resultsApi = await FetchApi();
      setData(resultsApi.results);
      setIsLoading(false);
    };
    ApiStarWars();
  }, []);

  return (
    <DataContext.Provider value={ { data, isLoading, FetchApi, filter, setFilter } }>
      { children }
    </DataContext.Provider>
  );
};

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DataProvider;

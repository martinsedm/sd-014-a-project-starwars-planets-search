import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import DataContext from './DataContext';
import FetchApi from '../services/FetchApi';

const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const [value, setValue] = useState('');
  const [options, setOptions] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);
  const [filter, setFilter] = useState({
    filters: {
      filterByName: {
        name: '',
      },
      filterByNumericValues: [],
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

  const context = {
    data,
    setData,
    isLoading,
    column,
    setColumn,
    comparison,
    setComparison,
    value,
    setValue,
    filter,
    setFilter,
    options,
    setOptions,
  };

  return (
    <DataContext.Provider value={ context }>
      { children }
    </DataContext.Provider>
  );
};

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DataProvider;

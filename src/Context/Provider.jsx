import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import useFetch from '../Hooks/useFetch';

const Provider = ({ children }) => {
  const [data, setData, loaded] = useFetch();
  const [name, setName] = useState('');
  const [filters, setFilters] = useState([]);

  const filterFunction = ({ comparison, column, value }) => {
    switch (comparison) {
    case 'maior que':
      return setData(data.filter((planet) => (
        Number(planet[column]) > Number(value)
      )));
    case 'menor que':
      return setData(data.filter((planet) => (
        Number(planet[column]) < Number(value)
      )));
    case 'igual a':
      return setData(data.filter((planet) => (
        Number(planet[column]) === Number(value)
      )));
    default:
      return null;
    }
  };

  const contextValue = {
    data,
    setData,
    loaded,
    setName,
    setFilters,
    filters: {
      filterByName: {
        name,
      },
      filterByNumericValues: filters,
    },
    filterFunction,
  };

  return (
    <Context.Provider value={ contextValue }>
      { children }
    </Context.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.shape({}).isRequired,
};

export default Provider;

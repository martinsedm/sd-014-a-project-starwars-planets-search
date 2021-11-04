import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import useFetch from '../Hooks/useFetch';

const Provider = ({ children }) => {
  const [data, loaded] = useFetch();
  const [name, setName] = useState('');
  const [filters, setFilters] = useState([]);
  const contextValue = {
    data,
    loaded,
    setName,
    setFilters,
    filters: {
      filterByName: {
        name,
      },
      filterByNumericValues: filters,
    },
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

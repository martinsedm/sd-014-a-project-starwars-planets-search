import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  });
  const [filteredData, setFilteredData] = useState([]);
  const [arrayFilters, setArrayFilters] = useState([]);

  const contextValue = {
    data: [...data],
    setData,
    filteredData: [...filteredData],
    setFilteredData,
    filters: { ...filters },
    setFilters,
    arrayFilters: [...arrayFilters],
    setArrayFilters,
  };

  return (
    <Context.Provider value={ contextValue }>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;

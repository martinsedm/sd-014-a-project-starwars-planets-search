import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

export default function AppProvider({ children }) {
  const [data, setData] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
  });

  async function getData() {
    const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets');
    const { results } = await response.json();
    const resultsFiltered = results.filter((result) => delete result.residents);
    setData(resultsFiltered);
  }

  function searchFilter() {
    const { filterByName: { name } } = filters;

    const filterByText = data
      .filter((planet) => planet.name.toLowerCase().includes(name.toLowerCase()));

    return filterByText;
  }

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setFilters({
      filterByName: { name: searchInput },
    });
  }, [searchInput]);

  const contextValue = {
    data,
    filters,
    setFilters,
    searchInput,
    setSearchInput,
    searchFilter,
  };

  return (
    <AppContext.Provider value={ contextValue }>
      { children }
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

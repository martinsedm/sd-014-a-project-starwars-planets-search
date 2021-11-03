import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

export default function AppProvider({ children }) {
  const [data, setData] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [columnOption, setColumnOption] = useState('population');
  const [valueInput, setValueInput] = useState('');
  const [comparisonOption, setComparisonOption] = useState('maior que');
  const [columnOptions, setColumnOptions] = useState(['population',
    'orbital_period', 'diameter', 'rotation_period', 'surface_water']);

  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterNumericValues: {
      column: '',
      comparison: '',
      value: '',
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
      ...filters,
      filterByName: { name: searchInput },
    });
  }, [searchInput]);

  useEffect(() => {
    setFilters({
      ...filters,
      filterNumericValues: {
        column: columnOption,
        comparison: comparisonOption,
        value: valueInput,
      },
    });
  }, [columnOption, comparisonOption, valueInput]);

  function numericFilter() {
    const {
      filterNumericValues: { column, comparison, value },
    } = filters;
    const newOptions = columnOptions.filter((option) => option !== column);
    setColumnOptions(newOptions);
    if (comparison === 'maior que') {
      const biggestThanFilter = data
        .filter((planet) => Number(planet[column]) > Number(value));

      return setData(biggestThanFilter);
    }
    if (comparison === 'menor que') {
      const lowerThanFilter = data
        .filter((planet) => Number(planet[column]) < Number(value));

      return setData(lowerThanFilter);
    }
    if (comparison === 'igual a') {
      const equalToFilter = data
        .filter((planet) => Number(planet[column]) === Number(value));

      return setData(equalToFilter);
    }
  }
  const contextValue = {
    data,
    filters,
    setFilters,
    searchInput,
    setSearchInput,
    searchFilter,
    columnOption,
    setColumnOption,
    comparisonOption,
    setComparisonOption,
    valueInput,
    setValueInput,
    numericFilter,
    columnOptions,
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

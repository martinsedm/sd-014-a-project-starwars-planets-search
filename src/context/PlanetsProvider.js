import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import swapi from '../services/swapi';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isFiltering, setIsFiltering] = useState(false);

  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  });

  const getPlanets = async () => {
    const filterResults = await swapi();
    setData(filterResults);
    setIsLoading(false);
  };

  useEffect(() => {
    getPlanets();
  }, []);

  const filteringByNumericValues = (planet, column, comparison, valuer) => {
    if (comparison === 'maior que') {
      return Number(planet[column]) > Number(valuer);
    }
    if (comparison === 'menor que') {
      return Number(planet[column]) < Number(valuer);
    }
    if (comparison === 'igual a') {
      return Number(planet[column]) === Number(valuer);
    }
  };

  const filterNames = () => {
    let filteredValues = data;
    if (isFiltering) {
      filters.filterByNumericValues.forEach(({ column, comparison, valuer }) => {
        filteredValues = filteredValues.filter((planet) => (
          filteringByNumericValues(planet, column, comparison, valuer)));
        if (filters.filterByName.name) {
          filteredValues = filteredValues.filter(
            ({ name }) => name.toLowerCase().includes(filters.filterByName.name),
          );
        }
      });
    } else if (filters.filterByName.name) {
      filteredValues = filteredValues.filter(
        ({ name }) => name.toLowerCase().includes(filters.filterByName.name),
      );
    }
    return filteredValues;
  };

  return (
    <PlanetsContext.Provider
      value={ {
        data,
        isLoading,
        filterNames,
        setFilters,
        filters,
        setIsFiltering,
      } }
    >
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;

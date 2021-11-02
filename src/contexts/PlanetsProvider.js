import React, { useState, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import useFetch from '../hooks/useFetch';
import { INITIAL_FILTER, updateFilter } from './useReducerAndActions';
import PlanetsContext from './PlanetsContext';

export default function PlanetsProvider({ children }) {
  const [filteredData, setFilteredData] = useState([]);
  const { data, loading } = useFetch('https://swapi-trybe.herokuapp.com/api/planets/');

  const [filter, dispatch] = useReducer(updateFilter, INITIAL_FILTER);

  useEffect(() => {
    const { filters: { filterByName: { name } } } = filter;
    const { filters: { filterByNumericValues } } = filter;

    setFilteredData(data);

    if (name) {
      const filteredByName = data.filter((planet) => planet.name
        .toLowerCase().includes(name.toLowerCase()));

      setFilteredData(filteredByName);
      console.log('filterByName render');
    }

    if (filterByNumericValues.length) {
      const { column, comparison, value } = filterByNumericValues[0];

      const numericFilter = data.filter((planet) => {
        if (comparison === 'maior que') return (1 * planet[column]) > (1 * value);
        if (comparison === 'igual a') return (1 * planet[column]) === (1 * value);
        if (comparison === 'menor que') return (1 * planet[column]) < (1 * value);

        return null;
      });

      setFilteredData(numericFilter);
      console.log('filterByNumber render');
    }

    // console.log(filterByNumericValues[0].column);
    // console.log(filterByNumericValues[0].comparison);
    // console.log(filterByNumericValues[0].value);
  }, [data, filter]);

  const providerContext = { filteredData, filter, loading, dispatch };

  return (
    <PlanetsContext.Provider value={ providerContext }>
      { children }
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};

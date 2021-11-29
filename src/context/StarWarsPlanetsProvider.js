import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsPlanetsContext from './StarWarsPlanetsContext';

const INITIAL_STATE = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
  order: {},
};

const API_URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

function StarWarsPlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState(INITIAL_STATE);
  const [planetsFiltered, setPlanetsFiltered] = useState([]);
  const [optionsFilter, setOptionsFilter] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '',
  });
  const { filterByName: { name }, filterByNumericValues } = filters;

  useEffect(() => {
    async function fetchStarWars() {
      const { results } = await fetch(API_URL).then((res) => res.json());

      // Refêrencia: https://ricardo-reis.medium.com/o-m%C3%A9todo-sort-do-array-javascript-482576734e0a

      const orderedData = results
        .sort(({ name: a }, { name: b }) => a.localeCompare(b));
      setData(orderedData);
    }
    fetchStarWars();
  }, []);

  // Refêrencia: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number

  useEffect(() => {
    let result = [...data];
    result = result.filter(({ name: planet }) => planet.toLowerCase()
      .includes(name.toLowerCase()));
    filterByNumericValues.forEach(({ column, comparison, value }) => {
      result = result.filter((planet) => {
        if (comparison === 'maior que') {
          return Number(planet[column]) > Number(value);
        }
        if (comparison === 'menor que') {
          return Number(planet[column]) < Number(value);
        }
        return Number(planet[column]) === Number(value);
      });
    });
    setPlanetsFiltered(result);
  }, [filterByNumericValues, name, data]);
  const value = {
    data,
    planetsFiltered,
    filters,
    setFilters,
    setOptionsFilter,
    optionsFilter,
    setPlanetsFiltered,
  };
  return (

    <StarWarsPlanetsContext.Provider value={ value }>
      {children}
    </StarWarsPlanetsContext.Provider>

  );
}

StarWarsPlanetsProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default StarWarsPlanetsProvider;

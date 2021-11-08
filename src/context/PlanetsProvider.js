/* eslint-disable react-hooks/exhaustive-deps */
// src: https://github.com/tryber/sd-14a-live-lectures/blob/lecture/17.2/trybe-questions/src/context/QuestionsProvider.js

import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';

import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // src: https://www.youtube.com/watch?v=Q8JyF3wpsHc
  const [name, setName] = useState('');
  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const [value, setValue] = useState('');
  const [columnOptions, setColumnOptions] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);
  // src: https://github.com/tryber/sd-014-a-project-starwars-planets-search/pull/8/commits/bc68e7f5df3e1e6ebf5cea76e68498392f57026c
  const [filterData, setFilterData] = useState([]);

  const [filters, setFilter] = useState(
    {
      filterByName: {
        name: '',
      },
      filterByNumericValues: [],
    },
  );

  // src: https://github.com/tryber/sd-14a-live-lectures/blob/lecture/17.3/iss-location-hooks/src/services/issAPI.js
  const getPlanets = async () => {
    const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
    const fetchURL = await fetch(URL);
    const response = await fetchURL.json();
    setData(response.results);
    setFilterData(response.results);
    setIsLoading(false);
  };

  const filterByNumber = () => {
    const number = Number(value);
    let filtered;
    switch (comparison) {
    case 'maior que':
      filtered = data.filter((planet) => Number(planet[column]) > number);
      return filtered;
    case 'menor que':
      filtered = data.filter((planet) => Number(planet[column]) < number);
      return filtered;
    case 'igual a':
      filtered = data.filter((planet) => Number(planet[column]) === number);
      return filtered;
    default:
      return null;
    }
  };

  useEffect(() => {
    setFilter({ ...filters, filterByName: name });
  }, [name]);

  const handleChange = (event) => {
    setName(event.target.value);
  };

  useEffect(() => {
    setFilterData(filterByNumber());
  }, [filters.filterByNumericValues]);

  useEffect(() => {
    getPlanets();
  }, []);

  const values = {
    data,
    isLoading,
    name,
    column,
    comparison,
    value,
    columnOptions,
    filters,
    filterData,
    getPlanets,
    handleChange,
    setColumn,
    setComparison,
    setValue,
    setColumnOptions,
    setFilter,
  };

  return (
    <PlanetsContext.Provider
      value={ values }
    >
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: propTypes.node,
}.isRequired;

export default PlanetsProvider;

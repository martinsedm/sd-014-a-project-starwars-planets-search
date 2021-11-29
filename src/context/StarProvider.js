import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import StarContext from './StarContext';
import fetchPlanets from '../services';

function StarProvider(props) {
  const INITIAL_STATE = {
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
    order: {
      column: 'name',
      sort: 'ASC',
    },
  };

  const columns = [
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ];

  const [planets, setPlanets] = useState([]);
  const [filters, setFilters] = useState(INITIAL_STATE);
  const [planetsCopy, setPlanetsCopy] = useState([]);
  const [columnFilters, setColumnFilters] = useState(columns);

  const getPlanets = async () => {
    const { results } = await fetchPlanets();
    setPlanets(results);
  };

  const getHeaders = () => {
    if (planets.length !== 0) {
      return Object.keys(planets[0]).filter((planet) => planet !== 'residents');
    }
    return [];
  };

  const handleChange = ({ target: { name, value } }, key) => {
    setFilters({ ...filters, [key]: { [name]: value } });
  };

  const columnFilter = () => {
    if (filters.filterByNumericValues.length !== 0) {
      const filteredColumns = columnFilters
        .filter((column) => filters.filterByNumericValues
          .some((filter) => filter.column !== column));
      setColumnFilters(filteredColumns);
    }
  };

  const handleFilters = ({ target: { id } }) => {
    const newFilter = filters.filterByNumericValues
      .filter((numFilter) => numFilter.column !== id);
    setFilters({ ...filters, filterByNumericValues: newFilter });
    console.log(filters);
  };

  const handleRadio = (orderFilter) => {
    setFilters({ ...filters, order: orderFilter });
  };

  const compareNumbers = (a, b) => {
    const returnMenosUm = -1;
    if (Number.isNaN(Number(a))) {
      if (a > b) return 1;
      if (a < b) return returnMenosUm;
      return 0;
    }
    return a - b;
  };

  const orderFilter = useCallback((array) => {
    const { order } = filters;
    let newArray = [];
    if (order.sort === 'ASC') {
      newArray = array.sort((a, b) => compareNumbers(a[order.column], b[order.column]));
    }
    if (order.sort === 'DESC') {
      newArray = array.sort((a, b) => compareNumbers(b[order.column], a[order.column]));
    }
    return newArray;
  }, [filters]);

  useEffect(() => {
    getPlanets();
  }, []);

  useEffect(() => {
    const { filterByName, filterByNumericValues } = filters;
    let planetFilter = [...planets];
    if (filterByName.name !== '') {
      planetFilter = planetFilter.filter((planet) => planet.name.toLowerCase()
        .includes(filterByName.name.toLowerCase()));
    }
    if (filterByNumericValues.length > 0) {
      filterByNumericValues.forEach(({ column, comparison, value }) => {
        if (comparison === 'igual a') {
          planetFilter = planetFilter.filter((planet) => planet[column] === value);
        }
        if (comparison === 'maior que') {
          planetFilter = planetFilter
            .filter((planet) => parseInt(planet[column], 10) > parseInt(value, 10));
        }
        if (comparison === 'menor que') {
          planetFilter = planetFilter
            .filter((planet) => parseInt(planet[column], 10) < parseInt(value, 10));
        }
      });
    }
    planetFilter = orderFilter(planetFilter);
    setPlanetsCopy(planetFilter);
  }, [filters, orderFilter, planets]);

  const context = {
    planets,
    filters,
    planetsCopy,
    columnFilters,
    getHeaders,
    handleChange,
    setFilters,
    columnFilter,
    handleFilters,
    handleRadio,
  };

  const { children } = props;

  return (
    <StarContext.Provider value={ context }>
      { children }
    </StarContext.Provider>
  );
}

StarProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarProvider;

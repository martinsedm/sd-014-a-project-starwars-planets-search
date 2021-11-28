import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarContext from './StarContext';
import fetchPlanets from '../services';

function StarProvider(props) {
  const INITIAL_STATE = {
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
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
    setPlanetsCopy(planetFilter);
  }, [filters, planets]);

  const context = {
    planets,
    filters,
    planetsCopy,
    columnFilters,
    handleChange,
    setFilters,
    columnFilter,
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

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import StarWarsContext from './StarWarsContext';

const END_POINT = 'https://swapi-trybe.herokuapp.com/api/planets/';
const INIT_STATE = {
  filterByName: { name: '' },
  filterByNumericValues: [],
};

const INIT_COLUMN_STATE = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

function StarWarsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [filters, setFilters] = useState(INIT_STATE);
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [columnStateGlobal, setColumnStateGlobal] = useState(INIT_COLUMN_STATE);

  useEffect(() => {
    fetch(END_POINT)
      .then((response) => response.json())
      .then((json) => {
        json.results.forEach((object) => delete object.residents);
        return json;
      })
      .then((object) => setPlanets(object.results));
  }, []);

  useEffect(() => {
    if (planets.length > 0) {
      let filtered = planets
        .filter(({ name }) => name.includes(filters.filterByName.name));

      if (filters.filterByNumericValues.length > 0) {
        filters.filterByNumericValues.forEach(({ column, comparison, value }) => {
          if (comparison === 'maior que') {
            filtered = filtered
              .filter((planetObject) => Number(planetObject[column]) > Number(value));
          }
          if (comparison === 'menor que') {
            filtered = filtered
              .filter((planetObject) => Number(planetObject[column]) < Number(value));
          }
          if (comparison === 'igual a') {
            filtered = filtered
              .filter((planetObject) => Number(planetObject[column]) === Number(value));
          }
        });
      }
      setFilteredPlanets(filtered);
    }
  }, [filters, planets]);

  return (
    <StarWarsContext.Provider
      value={ {
        planets,
        filteredPlanets,
        filters,
        setFilters,
        columnStateGlobal,
        setColumnStateGlobal,
      } }
    >
      {children}
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarsProvider;

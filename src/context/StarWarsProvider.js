import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import StarWarsContext from './StarWarsContext';

const END_POINT = 'https://swapi-trybe.herokuapp.com/api/planets/';
const INIT_STATE = { filterByName: { name: '' } };

function StarWarsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [filters, setFilters] = useState(INIT_STATE);
  const [filteredPlanets, setFilteredPlanets] = useState([]);

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
      const filtered = planets
        .filter(({ name }) => name.includes(filters.filterByName.name));
      setFilteredPlanets(filtered);
    }
  }, [filters, planets]);
  return (
    <StarWarsContext.Provider
      value={ { planets, filteredPlanets, filters, setFilters } }
    >
      {children}
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarsProvider;

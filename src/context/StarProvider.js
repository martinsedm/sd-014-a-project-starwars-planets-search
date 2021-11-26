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

  const [planets, setPlanets] = useState([]);
  const [filters, setFilters] = useState(INITIAL_STATE);
  const [planetsCopy, setPlanetsCopy] = useState([]);

  const getPlanets = async () => {
    const { results } = await fetchPlanets();
    setPlanets(results);
  };

  const handleChange = ({ target: { name, value } }, key) => {
    setFilters({ ...filters, [key]: { [name]: value } });
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
          console.log(typeof value);
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
    handleChange,
    setFilters,
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

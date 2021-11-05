import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarContext from './StarContext';
import fetchPlanets from '../services';

function StarProvider(props) {
  const INITIAL_STATE = {
    filterByName: {
      name: '',
    },
  };

  const [planets, setPlanets] = useState([]);
  const [filters, setFilters] = useState(INITIAL_STATE);
  const [planetsCopy, setPlanetsCopy] = useState([]);

  useEffect(() => {
    const { filterByName } = filters;
    let planetFilter = [...planets];
    if (filterByName.name !== '') {
      planetFilter = planetFilter.filter((planet) => planet.name.toLowerCase()
        .includes(filterByName.name.toLowerCase()));
    }
    setPlanetsCopy(planetFilter);
  }, [filters, planets]);

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

  const context = {
    planets,
    filters,
    planetsCopy,
    handleChange,
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

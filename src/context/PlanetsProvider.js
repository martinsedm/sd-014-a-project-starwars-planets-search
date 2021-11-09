import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import fetchPlanetList from '../services/services';

function PlanetsProvider({ children }) {
  const INITIAL_STATE = {
    filterByName: {
      name: '',
    },
  };

  const [planets, setPlanets] = useState([]);
  const [filters, setFilters] = useState(INITIAL_STATE);

  useEffect(() => {
    fetchPlanetList(setPlanets);
  }, []);

  const handleChange = ({ target: { value } }) => {
    setFilters({ ...filters, filterByName: { name: value } });
  };

  const context = {
    planets,
    setPlanets,
    filters,
    setFilters,
    handleChange,
  };
  return (
    <main>
      <PlanetsContext.Provider
        value={ context }
      >
        {children}
      </PlanetsContext.Provider>
    </main>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;

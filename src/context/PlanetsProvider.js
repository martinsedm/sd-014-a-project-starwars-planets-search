import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { INITIAL_STATE } from '../data/data';
import fetchPlanets from '../services/fetchPlanets';
import PlanetsContext from './PlanetsContext';

export default function PlanetsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState(INITIAL_STATE);

  const getPlanets = async () => {
    const { results } = await fetchPlanets();
    console.log(results);
    setPlanets(results);
    setIsLoading(false);
  };

  const searchedPlanets = planets.filter((planet) => planet.name.toLowerCase()
    .includes(filters.filterByName.name.toLowerCase()));

  // const filterPlanets = (column, comparison, value) => {
  // };

  useEffect(() => {
    getPlanets();
  }, []);

  const context = {
    planets,
    isLoading,
    filters,
    setFilters,
    searchedPlanets,
  };

  return (
    <PlanetsContext.Provider value={ context }>
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

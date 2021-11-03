import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import fetchPlanets from '../services/fetchPlanets';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const INITIAL_STATE = {
    filterByName: { name: '' },
  };

  const [planets, setPlanets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [name, setName] = useState('');
  const [filters, setFilters] = useState(INITIAL_STATE);

  const getPlanets = async () => {
    const { results } = await fetchPlanets();
    console.log(results);
    setPlanets(results);
    setIsLoading(false);
  };

  useEffect(() => {
    getPlanets();
  }, []);

  const searchedPlanets = planets.filter((planet) => planet.name.toLowerCase()
    .includes(filters.filterByName.name.toLowerCase()));

  const handleChange = ({ target: { value } }) => {
    setName(value);
    setFilters({ ...filters, filterByName: { name: value } });
  };

  const context = { planets, isLoading, handleChange, name, searchedPlanets };

  return (
    <PlanetsContext.Provider value={ context }>
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;

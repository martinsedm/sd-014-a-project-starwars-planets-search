import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

import planetsApi from '../services/planetsApi';

function PlanetsProvider({ children }) {
  const INITIAL_STATE = {
    filterByName: {
      name: '',
    },
  };

  const [planets, setPlanets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [name, setName] = useState('');
  const [filters, setFilters] = useState(INITIAL_STATE);

  const fetchPlanets = async () => {
    const { results } = await planetsApi(); // pegando apenas a chave "results" da resposta da API
    setPlanets(results);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchPlanets();
  }, []);

  const handleChange = ({ target: { value } }) => {
    setFilters({
      ...filters,
      filterByName: {
        name: value,
      },
    });
    setName(value);
  };

  const displayFilteredPlanets = planets.filter((planet) => (
    planet.name.toLowerCase().includes(filters.filterByName.name.toLowerCase())
  ));

  const context = {
    planets,
    isLoading,
    name,
    handleChange,
    displayFilteredPlanets,
  };

  return (
    <PlanetsContext.Provider value={ context }>
      { children }
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;

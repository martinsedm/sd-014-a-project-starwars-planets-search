import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

import planetsApi from '../services/planetsApi';

function PlanetsProvider({ children }) {
  const INITIAL_STATE = {
    filterByName: {
      name: '',
    },
    filterByNumericValues: [
      {
        column: 'population',
        comparison: 'maior que',
        value: '',
      },
    ],
  };

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState(INITIAL_STATE);

  const fetchPlanets = async () => {
    const { results } = await planetsApi(); // pegando apenas a chave "results" da resposta da API
    console.log(results);
    setData(results);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchPlanets();
  }, []);

  const displayFilteredPlanets = data.filter((planet) => (
    planet.name.toLowerCase().includes(filters.filterByName.name.toLowerCase())
  ));

  const context = {
    data,
    isLoading,
    displayFilteredPlanets,
    filters,
    setFilters,
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

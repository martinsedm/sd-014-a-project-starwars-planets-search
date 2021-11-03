import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

import planetsApi from '../services/planetsApi';

function PlanetsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchPlanets = async () => {
    const { results } = await planetsApi(); // pegando apenas a chave "results" da resposta da API
    setPlanets(results);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchPlanets();
  }, []);

  const context = {
    planets,
    isLoading,
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

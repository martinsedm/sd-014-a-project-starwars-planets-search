import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';

import { getPlanets } from '../services/planetsAPI';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);

  const getPlanetsData = async () => {
    const { results } = await getPlanets();
    setPlanets(results);
    setLoading(false);
  };

  useEffect(() => {
    getPlanetsData();
  }, []);

  const valueContext = {
    planets,
    loading,
  };

  return (
    <PlanetsContext.Provider value={ valueContext }>
      { children }
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: propTypes.node.isRequired,
};

export default PlanetsProvider;

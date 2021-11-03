import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import getPlanets from '../services/planetsAPI';

function PlanetsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);

  const callGetPlanets = async () => {
    const requestPlanets = await getPlanets();
    setPlanets(requestPlanets);
    setLoading(false);
  };

  return (
    <PlanetsContext.Provider value={ { planets, callGetPlanets, loading } }>
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;

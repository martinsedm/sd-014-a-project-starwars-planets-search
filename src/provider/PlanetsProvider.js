import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from '../context/PlanetsContext';
import fetchPlanetsInfo from '../services/planetRequestAPI';

function PlanetsProvider({ children }) {
  const [planetsData, setPlanetsData] = useState([]);
  async function invokeAPI() {
    const planetData = await fetchPlanetsInfo();
    setPlanetsData(planetData);
  }
  useEffect(() => {
    invokeAPI();
  }, []);
  return (
    <PlanetsContext.Provider value={ { planetsData } }>
      {children}
    </PlanetsContext.Provider>
  );
}
PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default PlanetsProvider;

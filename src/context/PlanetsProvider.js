import PropTypes from 'prop-types';
import React, { useState } from 'react';
import getPlanetsInfo from '../services/planetsApi';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [planetInfo, setPlanetsInfo] = useState([]);

  async function fetchPlanetsInfo() {
    const planetsInfo = await getPlanetsInfo();
    setPlanetsInfo(planetsInfo);
    console.log(planetInfo);
  }

  return (
    <PlanetsContext.Provider value={ { planetInfo, fetchPlanetsInfo } }>
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.func.isRequired,
};

export default PlanetsProvider;

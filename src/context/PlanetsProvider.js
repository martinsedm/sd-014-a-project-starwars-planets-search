import PropTypes from 'prop-types';
import React, { useState } from 'react';
import getPlanetsInfo from '../services/planetsApi';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [planetInfo, setPlanetsInfo] = useState([]);
  const [filters, setFilterByName] = useState({
    filterByName: {
      name: '',
    },
  });

  async function fetchPlanetsInfo() {
    const planetsInfo = await getPlanetsInfo();
    setPlanetsInfo(planetsInfo);
  }

  // function filterByName() {

  // }

  return (
    <PlanetsContext.Provider
      value={ {
        planetInfo,
        fetchPlanetsInfo,
        setPlanetsInfo,
        setFilterByName,
        filters } }
    >
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.objectOf().isRequired,
};

export default PlanetsProvider;

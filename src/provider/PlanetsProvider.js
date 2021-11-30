import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from '../context/PlanetsContext';
import fetchPlanetsInfo from '../services/planetRequestAPI';

function PlanetsProvider({ children }) {
  const [selectColumn, setSelectColumn] = useState('');
  const [filterByNumber, setFilterByNumber] = useState([]);
  const [planetsData, setPlanetsData] = useState([]);
  async function invokeAPI() {
    const planetData = await fetchPlanetsInfo();
    setPlanetsData(planetData);
    setFilterByNumber(planetData);
  }
  const contextData = {
    planetsData, filterByNumber, setFilterByNumber, selectColumn, setSelectColumn };
  useEffect(() => {
    invokeAPI();
  }, []);
  return (
    <PlanetsContext.Provider value={ contextData }>
      {children}
    </PlanetsContext.Provider>
  );
}
PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default PlanetsProvider;

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from '../context/PlanetsContext';
import fetchPlanetsInfo from '../services/planetRequestAPI';

function PlanetsProvider({ children }) {
  const [selectColumn, setSelectColumn] = useState('');
  const [filterByNumber, setFilterByNumber] = useState([]);
  const [filterByNumericValue, setFilterByNumeric] = useState([]);
  const [planetsData, setPlanetsData] = useState([]);
  async function invokeAPI() {
    const planetData = await fetchPlanetsInfo();
    setPlanetsData(planetData);
    setFilterByNumber(planetData);
  }
  const contextData = {
    filterByNumericValue,
    setFilterByNumeric,
    planetsData,
    filterByNumber,
    setFilterByNumber,
    selectColumn,
    setSelectColumn };
  useEffect(() => {
    invokeAPI();
  }, []);
  useEffect(() => {
    let filteredNumberPlanets = [...planetsData];
    filterByNumericValue.forEach(({ comparison, column, numberValue }) => {
      switch (comparison) {
      case 'maior que':
        filteredNumberPlanets = planetsData
          .filter((planet) => Number(planet[column]) > Number(numberValue));
        break;
      case 'menor que':
        filteredNumberPlanets = planetsData
          .filter((planet) => Number(planet[column]) < Number(numberValue));
        break;
      case 'igual a':
        filteredNumberPlanets = planetsData
          .filter((planet) => Number(planet[column]) === Number(numberValue));
        break;
      default:
        break;
      }
    });
    console.log(filteredNumberPlanets);
    setFilterByNumber(filteredNumberPlanets);
  }, [filterByNumericValue, planetsData]);
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

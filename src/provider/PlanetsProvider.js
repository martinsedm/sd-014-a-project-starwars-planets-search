import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from '../context/PlanetsContext';
import fetchPlanetsInfo from '../services/planetRequestAPI';

function PlanetsProvider({ children }) {
  const [sortOrder, setSortOrder] = useState({ column: 'name',
    sort: 'ASC' });
  const [selectColumn, setSelectColumn] = useState('');
  const [filterByNumber, setFilterByNumber] = useState([]);
  const [filterByNumericValue, setFilterByNumeric] = useState([]);
  const [planetsData, setPlanetsData] = useState([]);
  async function invokeAPI() {
    const planetData = await fetchPlanetsInfo();
    setPlanetsData(planetData);
    setFilterByNumber(planetData);
  }
  function compare(a, b) {
    const LESS_ONE = -1;
    if (Number.isNaN(Number(a))) {
      if (a > b) {
        return 1;
      }
      if (a < b) {
        return LESS_ONE;
      }
      return 0;
    }
    return a - b;
  }
  const contextData = {
    sortOrder,
    setSortOrder,
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
    switch (sortOrder.sort) {
    case 'ASC':
      filteredNumberPlanets = filteredNumberPlanets
        .sort((a, b) => compare(a[sortOrder.column], b[sortOrder.column]));
      break;
    case 'DESC':
      filteredNumberPlanets = filteredNumberPlanets
        .sort((a, b) => compare(b[sortOrder.column], a[sortOrder.column]));
      break;
    default:
      break;
    }
    setFilterByNumber(filteredNumberPlanets);
  }, [filterByNumericValue, planetsData, sortOrder.column, sortOrder.sort]);
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

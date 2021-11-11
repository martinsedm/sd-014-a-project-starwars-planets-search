import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import getPlanets from '../services/getPlanets';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  // const [columns, setColumn] = useState('');
  const [options, setOptions] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);
  const [filters, setFilter] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [
      {
        column: 'population',
        comparison: 'maior que',
        value: 0,
      },
    ],
  });

  const planetsFiltered = () => {
    const { filterByName: { name } } = filters;
    const filterPlanets = planets.filter((planet) => (planet.name.toLowerCase()
      .includes(name.toLowerCase())));
    setFilteredPlanets(filterPlanets);
  };

  const fetchPlanets = async () => {
    setisLoading(true);
    const { results } = await getPlanets();
    setPlanets(results);
    setisLoading(false);
    setFilteredPlanets(results);
  };

  const selectedFilters = () => {
    const { column, comparison, value } = filters.filterByNumericValues[0];

    let newFilteredPlanets = [filteredPlanets];

    switch (comparison) {
    case 'menor que':
      newFilteredPlanets = planets.filter((planet) => (
        Number(planet[column]) < Number(value)));
      break;

    case 'igual a':
      newFilteredPlanets = planets.filter((planet) => (
        Number(planet[column]) === Number(value)));
      break;

    case 'maior que':
      newFilteredPlanets = planets.filter((planet) => (
        Number(planet[column]) > Number(value)));
      break;
    default:
      break;
    }
    setFilteredPlanets([...newFilteredPlanets]);
  };

  useEffect(() => {
    fetchPlanets();
  }, []);
  useEffect(() => {
    planetsFiltered();
  }, [filters]);

  const stateProvider = {
    planets,
    setPlanets,
    filteredPlanets,
    setFilteredPlanets,
    isLoading,
    setisLoading,
    filters,
    setFilter,
    selectedFilters,
    options,
    setOptions,
  };

  return (
    <PlanetsContext.Provider value={ stateProvider }>
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: propTypes.node.isRequired,
};

export default PlanetsProvider;

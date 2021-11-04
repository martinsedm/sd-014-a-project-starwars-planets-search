import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState(
    {
      filterByName: { name: '' },
      filterByNumericValue: [],
    },
  );

  const filterPlanets = () => {
    let planetsToRender = planets;
    const { filterByName, filterByNumericValue } = filters;

    if (filterByName.name.length) {
      planetsToRender = planetsToRender
        .filter((planet) => planet.name.toLowerCase().includes(filterByName.name));
    }

    if (filterByNumericValue.length) {
      filterByNumericValue.forEach(({ comparison, column, value }) => {
        planetsToRender = planetsToRender.filter((planet) => {
          if (comparison === 'maior que') {
            return Number(planet[column]) > value;
          }
          if (comparison === 'menor que') {
            return Number(planet[column]) < value;
          }
          return Number(planet[column]) === value;
        });
      });
    }
    setFilteredPlanets(planetsToRender);
  };

  const value = {
    planets,
    loading,
    setPlanets,
    setLoading,
    filters,
    setFilters,
    filteredPlanets,
    setFilteredPlanets,
    filterPlanets,
  };

  return (
    <PlanetsContext.Provider value={ value }>
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;

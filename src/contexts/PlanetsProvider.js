import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  async function getPlanets() {
    const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const planetsJSON = await response.json();
    const planetsData = planetsJSON.results;
    const updatedPlanets = planetsData.filter((planets) => delete planets.residents);
    setData(updatedPlanets);
  }

  const context = {
    getPlanets,
    data,
  };

  useEffect(() => {
    getPlanets();
  }, []);

  return (
    <PlanetsContext.Provider value={ context }>
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;

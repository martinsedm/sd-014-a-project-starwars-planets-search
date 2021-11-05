import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const FILTER_INFO = {
    filters: {
      filterByName: {
        name: '',
      },
    },
  };

  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(FILTER_INFO);

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
    setFilter,
    filter,
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

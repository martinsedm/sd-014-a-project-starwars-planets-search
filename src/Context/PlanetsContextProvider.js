import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

function PlanetsContextProvider({ children }) {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    filters: {
      filterByName: {
        name: '',
      },
    },
  });

  const fetchAPI = async () => {
    const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const results = await response.json();
    setData(results.results);
  };

  const filterByName = (name) => {
    if (name) {
      const filteredPlanets = data.filter(
        (planet) => planet.name.toLowerCase().includes(name.toLowerCase()),
      );
      setData(filteredPlanets);
    } else {
      fetchAPI();
    }
  };

  const contextValue = { data, filters, fetchAPI, filterByName, setFilters };

  return (
    <PlanetsContext.Provider value={ contextValue }>
      { children }
    </PlanetsContext.Provider>
  );
}

PlanetsContextProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default PlanetsContextProvider;

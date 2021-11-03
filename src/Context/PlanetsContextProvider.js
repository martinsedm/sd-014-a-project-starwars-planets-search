import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

function PlanetsContextProvider({ children }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchAPI = async () => {
    setIsLoading(true);
    const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const results = await response.json();
    setData(results.results);
    setIsLoading(false);
  };

  return (
    <PlanetsContext.Provider value={ { data, isLoading, fetchAPI } }>
      { children }
    </PlanetsContext.Provider>
  );
}

PlanetsContextProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default PlanetsContextProvider;

// src: https://github.com/tryber/sd-14a-live-lectures/blob/lecture/17.2/trybe-questions/src/context/QuestionsProvider.js

import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';

import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  // src: https://github.com/tryber/sd-14a-live-lectures/blob/lecture/17.3/iss-location-hooks/src/services/issAPI.js
  const getPlanets = async () => {
    const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
    const fetchURL = await fetch(URL);
    const response = await fetchURL.json();
    setData(response.results);
    setLoading(false);
  };

  useEffect(() => {
    getPlanets();
  }, []);

  return (
    <PlanetsContext.Provider value={ { data, isLoading, getPlanets } }>
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: propTypes.node,
}.isRequired;

export default PlanetsProvider;

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

export default function PlanetProvider({ children }) {
  const [planets, setPlanets] = useState([{}]);

  const fetchPlanets = async () => {
    const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const data = await response.json();
    const { results } = data;
    results.forEach((column) => {
      delete column.edited;
    });
    setPlanets(results);
  };

  return (
    <main>
      <Context.Provider value={ { planets, fetchPlanets } }>
        {children}
      </Context.Provider>
    </main>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.node,
}.isRequised;

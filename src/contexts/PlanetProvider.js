import React, { Children, useState } from 'react';
import PlanetContext from './PlanetContext';

export default function PlanetProvider({ children }) {
  const [planets, setPlanets] = useState([{}]);

  const fetchPlanets = async () => {
    const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const data = await response.json();
    const { results } = data;
    results.forEach(element => {
      delete element.residents;
    });
    setPlanets(results);
  };

  return (
    <main>
      <PlanetContext.Provider value={ { planets, fetchPlanets } }>
        {children}
      </PlanetContext.Provider>
    </main>
  );
}

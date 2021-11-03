import React, { Children, useState } from 'react';
import PlanetContext from './PlanetContext';

export default function PlanetProvider({ children }) {
  const [planets, setPlanets] = useState([{}]);
  const [filters, setFilter] = useState({
    filterByName: {
      name: '',
    },
  });

  const fetchPlanets = async () => {
    const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const data = await response.json();
    const { results } = data;
    results.forEach((element) => {
      delete element.residents;
    });
    setPlanets(results);
  };

  return (
    <main>
      <PlanetContext.Provider value={ { planets, fetchPlanets, filters, setFilter } }>
        {children}
      </PlanetContext.Provider>
    </main>
  );
}

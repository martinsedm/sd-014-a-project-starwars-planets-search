import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';

export default function PlanetProvider({ children }) {
  const [planets, setPlanets] = useState([{}]);
  const [filters, setFilter] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  });

  const fetchPlanets = async () => {
    const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const data = await response.json();
    const { results } = data;
    results.forEach((element) => {
      delete element.residents;
    });
    console.log('fetched');
    setPlanets(results);
  };

  return (
    <main>
      <PlanetContext.Provider
        value={ {
          planets,
          fetchPlanets,
          filters,
          setFilter,
        } }
      >
        {children}
      </PlanetContext.Provider>
    </main>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

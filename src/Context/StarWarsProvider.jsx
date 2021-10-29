import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

function StarWarsProvider({ children }) {
  const [planets, setPlanets] = useState([]);

  const filter = {
    filterByName: '',
  };

  const [filters, setFilters] = useState(filter);

  const fetchPlanets = async () => {
    const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const data = await response.json();
    setPlanets(data.results);
  };

  const filterPlanetsByName = (name) => {
    if (name) {
      const filteredPlanets = planets.filter(
        (planet) => planet.name.toLowerCase().includes(name.toLowerCase()),
      );
      setPlanets(filteredPlanets);
    } else {
      fetchPlanets();
    }
  };

  const contextValue = {
    planets,
    setPlanets,
    filters,
    setFilters,
    filterPlanetsByName,
  };

  useEffect(() => {
    fetchPlanets();
  }, []);

  return (
    <StarWarsContext.Provider value={ contextValue }>
      {children}
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarsProvider;

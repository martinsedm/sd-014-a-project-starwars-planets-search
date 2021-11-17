import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarwarsContext from './StarwarsContext';

function StarwarsProvider({ children }) {
  const [planets, setPlanets] = useState([]);

  const filter = {
    filterByName: '',
  };

  const [filters, setFilters] = useState(filter);

  const fetchPlanets = async () => {
    const fetchApi = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const data = await fetchApi.json();
    setPlanets(data.results);
  };

  const filterPlanetsByName = (name) => {
    if (name) {
      const filterPlanets = planets.filter((planet) => planet.name.toLowerCase()
        .includes(name.toLowerCase()));
      setPlanets(filterPlanets);
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
    <StarwarsContext.Provider value={ contextValue }>
      { children }
    </StarwarsContext.Provider>
  );
}

StarwarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarwarsProvider;

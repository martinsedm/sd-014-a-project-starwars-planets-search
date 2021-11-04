import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import PlanetsContext from './PlanetsContext';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  const filter = { filtersByName: '' };
  const [filters, setFilters] = useState(filter);

  const fetchPlanets = async () => {
    const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const responseJson = await response.json();
    setData(responseJson.results);
  };

  useEffect(() => {
    fetchPlanets();
  }, []);

  const filtersByName = (name) => {
    if (name) {
      const filtered = data.filter((planet) => (
        planet.name.toLowerCase().includes(name.toLowerCase())
      ));
      setData(filtered);
    } else {
      fetchPlanets();
    }
  };

  const context = {
    data,
    filters,
    setFilters,
    filtersByName,
  };
  return (
    <PlanetsContext.Provider value={ context }>
      {children}
    </PlanetsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarsProvider;

import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import AppContext from './StarWarsContext';

const filterSearch = {
  filterByName: {
    name: '',
  },
};
function Provider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [filters, setFilters] = useState(filterSearch);
  const [filteredPlanets, setFilteredPlanets] = useState([]);

  const contextValue = {
    filteredPlanets,
    setFilteredPlanets,
    filters,
    setFilters,
    planets,
    setPlanets,
  };

  const getPlanets = async () => {
    const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const responseplanets = await response.json();
    return responseplanets.results;
  };

  useEffect(() => {
    getPlanets().then(setPlanets);
    getPlanets().then(setFilteredPlanets);
  }, []);

  return (
    <AppContext.Provider value={ contextValue }>
      {children}
    </AppContext.Provider>
  );
}
Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;

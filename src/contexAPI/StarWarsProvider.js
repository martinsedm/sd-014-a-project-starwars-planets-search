import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import starWarsContext from './StarWarsContext';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [filters, setFilters] = useState({ filterByName: { name: '' } });
  const { filterByName: { name } } = filters;

  const planetsAPI = async () => {
    const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const planetsApi = await response.json();
    setData(planetsApi.results);
  };

  useEffect(() => {
    planetsAPI();
  }, []);

  useEffect(() => {
    const filterNamePlanets = data.filter((planet) => planet.name.includes(name));
    setPlanets(filterNamePlanets);
  }, [data, name, filters]);

  const context = {
    data,
    setData,
    planets,
    setPlanets,
    filters,
    setFilters,
  };

  return (
    <starWarsContext.Provider value={ context }>
      {children}
    </starWarsContext.Provider>
  );
}
StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarsProvider;

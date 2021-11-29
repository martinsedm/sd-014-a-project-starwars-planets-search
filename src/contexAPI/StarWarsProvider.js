import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import starWarsContext from './StarWarsContext';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [filters, setFilters] = useState({ filterByName: { name: '' },
    filterByNumericValues: [],
    order: {
      column: 'name',
      sort: 'ASC',
    } });
  const [currentColumn, setCurrentColumn] = useState('');
  const [currentSort, setCurrentSort] = useState('');
  const { filterByName: { name }, filterByNumericValues } = filters;
  const planetsAPI = async () => {
    const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const planetsApi = await response.json();
    setData(planetsApi.results);
  };

  useEffect(() => {
    planetsAPI();
  }, []);

  // assistido pelo Jonathan Ferreira!!
  useEffect(() => {
    const planetsFilter = (planet) => {
      const nameCheckedPlanet = planet.name.toLowerCase().includes(name.toLowerCase());
      if (!nameCheckedPlanet) {
        return false;
      }
      return filterByNumericValues.every(({ column, comparison, value }) => {
        switch (comparison) {
        case 'maior que':
          return Number(planet[column]) > Number(value);
        case 'menor que':
          return Number(planet[column]) < Number(value);
        case 'igual a':
          return Number(planet[column]) === Number(value);
        default: return nameCheckedPlanet;
        }
      });
    };
    const filteredPlanets = data.filter(planetsFilter);
    setPlanets(filteredPlanets);
  }, [name, filters, data, filterByNumericValues]);

  const context = {
    filters,
    setFilters,
    planets,
    setPlanets,
    currentColumn,
    setCurrentColumn,
    currentSort,
    setCurrentSort,
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

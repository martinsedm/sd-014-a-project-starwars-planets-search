import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import starWarsContext from './StarWarsContext';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [filters, setFilters] = useState({ filterByName: { name: '' },
    filterByNumericValues: [] });
  const [currentFilters, setCurrentFilters] = useState({ comparison: '',
    value: 0,
    column: ',' });
  const [columnToTakeOff, setColumnToTakeOff] = useState('');
  const { filterByName: { name }, filterByNumericValues } = filters;
  const { column, comparison, value } = currentFilters;

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
      switch (comparison) {
      case 'maior que':
        return Number(planet[column]) > Number(value);
      case 'menor que':
        return Number(planet[column]) < Number(value);
      case 'igual a':
        return Number(planet[column]) === Number(value);
      default: return nameCheckedPlanet;
      }
    };
    const filteredPlanets = data.filter(planetsFilter);
    setPlanets(filteredPlanets);
  }, [name, filters, filterByNumericValues, data, comparison, column, value]);

  const context = {
    filters,
    setFilters,
    planets,
    setPlanets,
    currentFilters,
    setCurrentFilters,
    columnToTakeOff,
    setColumnToTakeOff,
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

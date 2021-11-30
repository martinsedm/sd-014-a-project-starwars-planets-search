import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarwarsContext from './StarwarsContext';

function StarwarsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [valor, setValor] = useState('');

  const filter = {
    filterByName: '',
    filterByNumericValues: [
      {
        column: 'population',
        comparison: 'maior que',
        value: '',
      },
    ],
  };

  const [filters, setFilters] = useState(filter);

  const fetchPlanets = async () => {
    const fetchApi = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const data = await fetchApi.json();
    setPlanets(data.results);
    setFilteredPlanets(data.results);
  };

  const filterPlanetsByName = (name) => {
    const lowerBusca = name.toLowerCase();
    const filterPlanets = planets
      .filter((planet) => planet.name.toLowerCase()
        .includes(lowerBusca));
    setFilteredPlanets(filterPlanets);
  };

  // const filterPlanetsByNumber = () => {
  //   const { filterByNumericValues: [{ column, value, comparison }] } = filters;
  //   let planetsByNumber;
  //   if (comparison === 'maior que') {
  //     planetsByNumber = planets.filter((planet) => planet[column] > value);
  //   }
  //   if (comparison === 'menor que') {
  //     planetsByNumber = planets.filter((planet) => planet[column] < value);
  //   }
  //   if (comparison === 'igual a') {
  //     planetsByNumber = planets.filter((planet) => planet[column] === value);
  //   }
  //   setFilteredPlanets(planetsByNumber);
  // };

  const contextValue = {
    planets,
    setPlanets,
    filters,
    setFilters,
    filterPlanetsByName,
    filteredPlanets,
    setFilteredPlanets,
    column,
    setColumn,
    comparison,
    setComparison,
    valor,
    setValor,

  };

  useEffect(() => {
    fetchPlanets();
  }, []);

  // useEffect(() => {
  //   const planetsNumeric = filterPlanetsByNumber();
  //   setFilteredPlanets(planetsNumeric);
  // }, [filter.filterByNumericValues]);

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

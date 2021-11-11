import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ContextPlanets from './ContextPlanets';

export default function ProviderPlanets({ children }) {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [planetsFiltered, setPlanetsFiltered] = useState([]);
  const [filter, setFilter] = useState({
    filterByName: {
      name: '',
    },
    filterByNumbers: {
      column: '',
      comparison: '',
      value: '',
    },
  });

  // Requisito 4
  const getColumn = document.getElementById('column');
  getColumn.childNodes.forEach((child) => {
    if (child.value === column) {
      child.remove();
    }
  });

  function setInputFilter(name) {
    setFilter({
      ...filter, filterByName: { name },
    });
  }

  function setNumericFilter(column, comparison, value) {
    setFilter({
      ...filter,
      filterByNumbers: {
        column,
        comparison,
        value,
      },
    });
  }

  const context = {
    planets,
    setPlanets,
    loading,
    setInputFilter,
    filter,
    setNumericFilter,
    planetsFiltered,
    setPlanetsFiltered,
  };

  const url = 'https://swapi.dev/api/planets/';
  useEffect(() => {
    const fetchAPI = async () => {
      const results = await fetch(url);
      const getPlanets = await results.json();
      console.log(getPlanets);
      getPlanets.results.forEach((element) => delete element.residents);
      setPlanets(getPlanets.results);
      setLoading(false);
    };
    fetchAPI();
  }, []);

  useEffect(() => {
    const { filterByNumbers: { column, comparison, value } } = filter;
    if (column !== '') {
      const planetsFilter = planets.filter((planet) => {
        const valueOfPlanet = Number(planet[column]);
        if (comparison === 'igual a') return valueOfPlanet === Number(value);
        if (comparison === 'maior que') return valueOfPlanet > Number(value);
        if (comparison === 'menor que') return valueOfPlanet < Number(value);
        return false;
      });
      setPlanetsFiltered(planetsFilter);
    }
  }, [filter, filter.filterByNumbers, planets]);

  return (
    <ContextPlanets.Provider value={ context }>
      { children }
    </ContextPlanets.Provider>
  );
}

ProviderPlanets.propTypes = {
  children: PropTypes.node.isRequired,
};

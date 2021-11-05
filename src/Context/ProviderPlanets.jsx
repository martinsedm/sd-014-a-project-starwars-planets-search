import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ContextPlanet from './ContextPlanet';

export default function ProviderPlanets({ children }) {
  const columnFilter = document.getElementById('column');
  const [data, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [planetsFiltered, setPlanetsFiltered] = useState([]);
  const [filters, setFilter] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: {
      column: '',
      comparison: '',
      value: '',
    },
  });

  function setInputFilter(name) {
    setFilter({
      ...filters, filterByName: { name },
    });
  }

  function setInputFilterNumeric(column, comparison, value) {
    setFilter({
      ...filters,
      filterByNumericValues: {
        column,
        comparison,
        value,
      },
    });
    columnFilter.childNodes.forEach((child) => {
      if (child.value === column) {
        child.remove();
      }
    });
  }

  const context = {
    data,
    setPlanets,
    loading,
    setInputFilter,
    filters,
    setInputFilterNumeric,
    planetsFiltered,
    setPlanetsFiltered,
  };

  useEffect(() => {
    async function fetchAPI() {
      const res = await fetch('https://swapi.dev/api/planets/');
      const getPlanets = await res.json();
      getPlanets.results.forEach((element) => delete element.residents);
      setPlanets(getPlanets.results);
      setLoading(false);
    }
    fetchAPI();
  }, []);

  useEffect(() => {
    const { filterByNumericValues: { column, comparison, value } } = filters;
    if (column !== '') {
      const filteredData = data.filter((planet) => {
        const planetValue = Number(planet[column]);
        if (comparison === 'maior que') return planetValue > Number(value);
        if (comparison === 'menor que') return planetValue < Number(value);
        if (comparison === 'igual a') return planetValue === Number(value);
        return false;
      });
      setPlanetsFiltered(filteredData);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters.filterByNumericValues]);

  return (
    <ContextPlanet.Provider value={ context }>
      {children}
    </ContextPlanet.Provider>
  );
}

ProviderPlanets.propTypes = {
  children: PropTypes.node.isRequired,
};

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

function StarWarsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [allPlanets, setAllPlanets] = useState([]);

  const initialColumns = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water'];

  const [columns, setColumns] = useState(initialColumns);

  const filter = {
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
    order: { column: 'name', sort: 'ASC' },
  };

  const [filters, setFilters] = useState(filter);

  const fetchPlanets = async () => {
    const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const data = await response.json();
    setPlanets(data.results);
    setAllPlanets(data.results);
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

  const removeColumn = (column) => {
    const newColumns = columns.filter((c) => c !== column);
    setColumns(newColumns);
  };

  const addColumn = (column) => {
    const newColumns = [...columns, column];
    setColumns(newColumns);
  };

  const removeFilterByNumericValue = (column) => {
    const newFilters = { ...filters };
    newFilters.filterByNumericValues = filters.filterByNumericValues.filter(
      (f) => f.column !== column,
    );
    setFilters(newFilters);
  };

  const filterPlanetsByNumericValues = (column, comparison, value) => {
    removeColumn(column);
    if (column && comparison && value) {
      const valueToCompare = Number(value);
      const filteredPlanets = planets.filter((planet) => {
        const planetValue = Number(planet[column]);
        switch (comparison) {
        case 'maior que':
          return planetValue > valueToCompare;
        case 'menor que':
          return planetValue < valueToCompare;
        case 'igual a':
          return planetValue === valueToCompare;
        default:
          return planetValue;
        }
      });
      setPlanets(filteredPlanets);
    } else {
      fetchPlanets();
    }
  };

  const resetPlanets = () => {
    setPlanets(allPlanets);
  };

  const contextValue = {
    planets,
    setPlanets,
    filters,
    setFilters,
    columns,
    setColumns,
    filterPlanetsByName,
    filterPlanetsByNumericValues,
    addColumn,
    removeFilterByNumericValue,
    resetPlanets,
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

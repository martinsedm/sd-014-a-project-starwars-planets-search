import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';

function PlanetProvider({ children }) {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const initialStates = {
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
    order: { column: 'name', sort: 'ASC' },
  };
  const [filters, setFilters] = useState(initialStates);

  const initialColumns = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water'];

  const [columns, setColumns] = useState(initialColumns);

  const searchApi = 'https://swapi-trybe.herokuapp.com/api/planets/';

  const fetchApiPlanets = async () => {
    const response = await fetch(searchApi);
    const json = await response.json();
    const planets = json.results;
    setData(planets);
    setLoading(false);
  };

  useEffect(() => {
    fetchApiPlanets();
  }, []);

  const nameFilters = (type, value) => {
    setFilters({
      ...filters,
      [type]: value,
    });
  };

  const filterPlanetsByName = (name) => {
    if (name) {
      const filterPlanets = data.filter(
        (planet) => planet.name.toLowerCase().includes(name.toLowerCase()),
      );
      setData(filterPlanets);
    } else {
      fetchApiPlanets();
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

  const removeFilterByNum = (column) => {
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
      const filteredPlanets = data.filter((planet) => {
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
      setData(filteredPlanets);
    } else {
      fetchApiPlanets();
    }
  };

  const resetFilters = () => {
    setData(allPlanets);
  };

  const context = {
    data,
    isLoading,
    filters,
    columns,
    setFilters,
    resetFilters,
    nameFilters,
    filterPlanetsByName,
    filterPlanetsByNumericValues,
    removeFilterByNum,
    addColumn,
  };

  return (
    <PlanetContext.Provider value={ context }>
      { children }
    </PlanetContext.Provider>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetProvider;

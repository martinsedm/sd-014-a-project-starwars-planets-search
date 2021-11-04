import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';

function PlanetProvider({ children }) {
  const initialStates = {
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
    order: { column: 'name', sort: 'ASC' },
  };

  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [filters, setFilters] = useState(initialStates);
  const [array, setArray] = useState([]);

  // const btnRemove = () => {
  //   setFilters({
  //     ...filters,
  //     filterByNumericValues:
  //     [...filters, filterByNumericValues,
  //       { column, comparison, value }],
  //   });
  // };

  const [columns, setColumns] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water']);

  const searchApi = 'https://swapi-trybe.herokuapp.com/api/planets/';

  const fetchApiPlanets = async () => {
    const response = await fetch(searchApi);
    const json = await response.json();
    const planets = json.results;
    setData(planets);
    setLoading(false);
    setArray(planets.results);
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
    const columnsRmv = columns.filter((c) => c !== column);
    setColumns(columnsRmv);
  };

  const addColumn = (column) => {
    const columnsAdd = [...columns, column];
    setColumns(columnsAdd);
  };

  const removeFilterByNumericValues = (column) => {
    const newFilters = { ...filters };
    newFilters.filterByNumericValues = filters.filterByNumericValues.filter(
      (filter) => filter.column !== column,
    );
    setFilters(newFilters);
  };

  const filterPlanetsByNumericValues = (column, comparison, value) => {
    removeColumn(column);
    if (column && comparison && value) {
      const compareValue = Number(value);
      const filterPlanets = data.filter((planet) => {
        const planetValue = Number(planet[column]);
        switch (comparison) {
        case 'maior que':
          return planetValue > compareValue;
        case 'menor que':
          return planetValue < compareValue;
        case 'igual a':
          return planetValue === compareValue;
        default:
          return planetValue;
        }
      });
      setData(filterPlanets);
    } else {
      fetchApiPlanets();
    }
  };

  const resetFilters = () => {
    setData(array);
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
    removeFilterByNumericValues,
    addColumn,
    removeColumn,
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

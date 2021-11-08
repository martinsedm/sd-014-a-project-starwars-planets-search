import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import PlanetsContext from './PlanetsContext';

const INITIAL_COLUMN = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [columns, setColumns] = useState(INITIAL_COLUMN);

  const filter = {
    filtersByName: '',
    filterByNumericValues: [],
    order: {
      column: 'name',
      sort: 'ASC',
    },
  };
  const [filters, setFilters] = useState(filter);

  const fetchPlanets = async () => {
    const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const responseJson = await response.json();
    setData(responseJson.results);
    setPlanets(responseJson.results);
  };

  useEffect(() => {
    fetchPlanets();
  }, []);

  const filtersByName = (name) => {
    if (name) {
      const filtered = data.filter((planet) => (
        planet.name.toLowerCase().includes(name.toLowerCase())
      ));
      setData(filtered);
    } else {
      fetchPlanets();
    }
  };

  const addColumn = (column) => {
    setColumns([...columns, column]);
  };

  const removeItemFromFilterByNum = (column) => {
    const newFilters = { ...filters };
    newFilters.filterByNumericValues = filters.filterByNumericValues.filter(
      (item) => (
        item.column !== column
      ),
    );

    setFilters(newFilters);
    setData(planets);
  };

  const removeColumn = (column) => {
    setColumns(columns.filter((item) => item !== column));
  };

  const filtersByNumeric = (column, comparison, value) => {
    removeColumn(column);
    if (column && comparison && value) {
      const filtered = data.filter((planet) => {
        const filterElement = Number(planet[column]);
        if (comparison === 'maior que') {
          return filterElement > Number(value);
        }
        if (comparison === 'menor que') {
          return filterElement < Number(value);
        }
        if (comparison === 'igual a') {
          return filterElement === Number(value);
        }
        return filterElement;
      });
      setData(filtered);
    } else {
      fetchPlanets();
    }
  };

  const context = {
    data,
    filters,
    columns,
    setFilters,
    filtersByName,
    filtersByNumeric,
    addColumn,
    removeColumn,
    removeItemFromFilterByNum,
  };
  return (
    <PlanetsContext.Provider value={ context }>
      {children}
    </PlanetsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarsProvider;

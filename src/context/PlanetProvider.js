import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './planetContext';
import Api from '../services/Api';

const initialColumns = [
  'rotation_period',
  'orbital_period',
  'diameter',
  'surface_water',
  'population',
];

const filterOptions = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [
    {
      column: '',
      comparison: '',
      value: '',
    },
  ],
};

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [filters, setFilters] = useState(filterOptions);
  const [columns, setColumns] = useState(initialColumns);

  async function fetchData() {
    const arrayPlanets = await Api();
    setData(arrayPlanets);
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const {
      filterByName: { name },
      filterByNumericValues,
    } = filters;
    filterByNumericValues.forEach((filterValues) => {
      const { column, comparison, value } = filterValues;
      const filteredArray = data.filter((planet) => {
        const includesName = planet.name.toLowerCase().includes(name.toLowerCase());
        switch (comparison) {
        case 'maior que':
          return parseInt(planet[column], 10) > parseInt(value, 10) && includesName;
        case 'menor que':
          return parseInt(planet[column], 10) < parseInt(value, 10) && includesName;
        case 'igual a':
          return parseInt(planet[column], 10) === parseInt(value, 10) && includesName;
        default:
          return includesName;
        }
      });
      setPlanets(filteredArray);
    });
  }, [data, filters]);

  const context = { planets, setPlanets, filters, setFilters, columns, setColumns };

  return <PlanetsContext.Provider value={ context }>{children}</PlanetsContext.Provider>;
}

export default PlanetsProvider;

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

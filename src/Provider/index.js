import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from '../context';
import requestPlanets from '../util/starWarsAPI';

function StarWarsProvider({ children }) {
  const [data, setData] = useState({});
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  });

  const [filteredData, setFilteredData] = useState({});

  const populatePlanets = async () => {
    const planets = await requestPlanets();
    setData(planets);
  };

  const setFilterByName = (name) => {
    setFilters({
      ...filters,
      filterByName: {
        name,
      },
    });
    setFilteredData(Object.values(data)
      .filter(({ name: planetName }) => planetName.includes(name)));
  };

  const applyNumberFilter = (column, comparison, value) => {
    setFilteredData(Object.values(data)
      .filter((planet) => {
        switch (comparison) {
        case 'igual a':
          return planet[column] === value;
        case 'menor que':
          return +planet[column] < +value;
        default:
          return +planet[column] > +value;
        }
      }));
  };

  const setFilterByNumber = ({ column, comparison, value }) => {
    setFilters({
      ...filters,
      filterByNumericValues: filters.filterByNumericValues.concat({
        column,
        comparison,
        value,
      }),
    });
    applyNumberFilter(column, comparison, value);
  };

  const context = {
    data,
    populatePlanets,
    filters,
    setFilterByName,
    filteredData,
    setFilterByNumber,
    applyNumberFilter,
  };

  return (
    <StarWarsContext.Provider value={ context }>
      { children }
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarsProvider;

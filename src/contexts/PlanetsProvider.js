import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const FILTER_INFO = {
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  };

  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(FILTER_INFO);

  async function getPlanets() {
    const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const planetsJSON = await response.json();
    const planetsData = planetsJSON.results;
    const updatedPlanets = planetsData.filter((planets) => delete planets.residents);
    setData(updatedPlanets);
  }

  const handleLog = (column, comparison, number) => setFilter(
    { ...filter,
      filterByNumericValues: [...filter
        .filterByNumericValues, { column, comparison, number }] },
  );

  const context = {
    getPlanets,
    data,
    setFilter,
    filter,
    handleLog,
  };

  useEffect(() => {
    getPlanets();
  }, []);

  useEffect(() => {
    const { filterByNumericValues } = filter;
    if (filterByNumericValues.length > 0) {
      const lastValue = filterByNumericValues[filterByNumericValues.length - 1];
      const { column, comparison, number } = lastValue;
      let filteredData = data;

      switch (comparison) {
      case 'maior que':
        filteredData = data.filter((planet) => Number(planet[column]) > (number));
        break;
      case 'menor que':
        filteredData = data.filter((planet) => Number(planet[column]) < number);
        break;
      case 'igual a':
        filteredData = data.filter((planet) => Number(planet[column]) === number);
        break;

      default:
        console.log(null);
        break;
      }
      setData(filteredData);
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter.filterByNumericValues]);

  return (
    <PlanetsContext.Provider value={ context }>
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;

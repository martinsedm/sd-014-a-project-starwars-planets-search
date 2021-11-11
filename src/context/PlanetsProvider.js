import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import fetchPlanetList from '../services/Api';
import { columnList } from '../services/data';

function PlanetsProvider({ children }) {
  const INITIAL_STATE = {
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  };

  const INITIAL_NUMSTATE = {
    column: '',
    comparison: '',
    value: '0',
  };

  const [planets, setPlanets] = useState([]);
  const [filters, setFilters] = useState(INITIAL_STATE);
  const [numFilter, setNumFilter] = useState(INITIAL_NUMSTATE);
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [filterColumn, setFilterColumn] = useState(columnList);

  useEffect(() => {
    fetchPlanetList(setPlanets);
  }, []);

  useEffect(() => {
    const { filterByName: { name }, filterByNumericValues } = filters;
    let filteredArray = planets.filter((planet) => {
      if (name !== '') {
        return planet.name.toLowerCase().includes(name.toLowerCase());
      }
      return planet;
    });
    if (filterByNumericValues.length > 0) {
      filterByNumericValues.forEach((element) => {
        const { column, comparison, value } = element;
        switch (comparison) {
        case 'maior que':
          filteredArray = filteredArray
            .filter((planet) => parseInt(planet[column], 10) > parseInt(value, 10));
          break;
        case 'menor que':
          filteredArray = filteredArray
            .filter((planet) => parseInt(planet[column], 10) < parseInt(value, 10));
          break;
        case 'igual a':
          filteredArray = filteredArray
            .filter((planet) => parseInt(planet[column], 10) === parseInt(value, 10));
          break;
        default: break;
        }
      });
    }
    setFilteredPlanets(filteredArray);
  }, [planets, filters]);

  const handleChange = ({ target: { value } }) => {
    setFilters({ ...filters, filterByName: { name: value } });
  };

  const handleSelectColumn = ({ target: { value } }) => {
    setNumFilter({
      ...numFilter, column: value });
  };

  const handleSelectComparison = ({ target: { value } }) => {
    setNumFilter({
      ...numFilter, comparison: value });
  };

  const handleChangeNumber = ({ target: { value } }) => {
    setNumFilter({
      ...numFilter, value });
  };

  const handleClick = () => {
    const { filterByNumericValues } = filters;
    setFilters({
      ...filters, filterByNumericValues: [...filterByNumericValues, numFilter],
    });
    setNumFilter(INITIAL_NUMSTATE);
    const { column } = numFilter;
    const indexColumn = filterColumn.indexOf(column);
    const NON_EXISTENT = -1;
    if (indexColumn > NON_EXISTENT) {
      const NEW_FILTER = [...filterColumn];
      NEW_FILTER.splice(indexColumn, 1);
      setFilterColumn(NEW_FILTER);
    }
  };

  const context = {
    planets,
    filters,
    numFilter,
    filteredPlanets,
    filterColumn,
    handleChange,
    handleSelectColumn,
    handleSelectComparison,
    handleChangeNumber,
    handleClick,
  };
  return (
    <main>
      <PlanetsContext.Provider
        value={ context }
      >
        {children}
      </PlanetsContext.Provider>
    </main>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;

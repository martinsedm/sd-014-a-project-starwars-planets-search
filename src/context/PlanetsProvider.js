import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { INITIAL_COLUMNS, INITIAL_STATE } from '../data/data';
import fetchPlanets from '../services/fetchPlanets';
import PlanetsContext from './PlanetsContext';

export default function PlanetsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [renderPlanets, setRenderPlanets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState(INITIAL_STATE);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('100000');
  const [columnOptions, setColumnOptions] = useState(INITIAL_COLUMNS);

  const getPlanets = async () => {
    const { results } = await fetchPlanets();
    console.log(results);
    setPlanets(results);
    setRenderPlanets(results);
    setIsLoading(false);
  };

  useEffect(() => {
    getPlanets();
  }, []);

  const handleChange = ({ target }) => {
    setFilters({ ...filters, filterByName: { name: target.value } });
    const filteredPlanets = planets.filter((planet) => (
      planet.name.toLowerCase().includes(target.value)));
    setRenderPlanets(filteredPlanets);
  };

  const filterPlanets = () => {
    const filtered = renderPlanets.filter((planet) => {
      if (comparison === 'maior que') {
        return Number(planet[column]) > Number(value);
      }
      if (comparison === 'menor que') {
        return Number(planet[column]) < Number(value);
      }
      if (comparison === 'igual a') {
        return Number(planet[column]) === Number(value);
      }
      return filtered;
    });
    setRenderPlanets(filtered);
  };

  useEffect(() => {
    const updateOptions = () => {
      const { filterByNumericValues } = filters;
      const usedColumns = filterByNumericValues.map((filter) => filter.column);
      const updatedOptions = INITIAL_COLUMNS
        .filter((option) => !usedColumns.includes(option));
      setColumnOptions(updatedOptions);
    };
    updateOptions();
  }, [filters]);

  const handleClick = () => {
    setFilters({
      ...filters,
      filterByNumericValues: [
        ...filters.filterByNumericValues, { column, comparison, value }],
    });
    filterPlanets();
  };

  const context = {
    planets,
    isLoading,
    filters,
    setFilters,
    handleChange,
    renderPlanets,
    filterPlanets,
    handleClick,
    setColumn,
    setComparison,
    setValue,
    columnOptions,
  };

  return (
    <PlanetsContext.Provider value={ context }>
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

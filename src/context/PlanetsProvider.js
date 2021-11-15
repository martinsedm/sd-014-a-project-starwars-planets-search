import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import getPlanets from '../services/api';

const COLUMN_OPTIONS = [
  'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
];
const INITIAL_FILTERS_STATE = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
};

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [unmodifiedData, setUnmodifiedData] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [filters, setFilters] = useState(INITIAL_FILTERS_STATE);
  const [columnOptions, setColumnOptions] = useState(COLUMN_OPTIONS);

  const removeNumericFilter = (filterToRemove) => {
    const currentFilters = [...filters.filterByNumericValues];
    const result = currentFilters.filter(({ column }) => (
      filterToRemove !== column));
    setFilters({ ...filters, filterByNumericValues: [...result] });
  };

  const handleColumns = (column) => {
    const availableColumns = [...columnOptions];
    const columnToRemove = availableColumns.indexOf(column);
    availableColumns.splice(columnToRemove, 1);
    setColumnOptions(availableColumns);
  };

  const handleName = (name) => {
    setFilters({ ...filters, filterByName: { name } });
  };

  const handleNumericValues = (event, { column, comparison, value }) => {
    event.preventDefault();
    setFilters({ ...filters,
      filterByNumericValues:
      [...filters.filterByNumericValues, { column, comparison, value }] });

    handleColumns(column);
  };

  const setPlanetsOnState = async () => {
    const planets = await getPlanets();
    setData(planets);
    setUnmodifiedData(planets);
    setHeaders(Object.keys(planets[0]));
  };

  useEffect(() => { setPlanetsOnState(); }, []);
  useEffect(() => {
    const { filterByName: { name } } = filters;
    const filteredPlanets = unmodifiedData.filter((planet) => (
      planet.name.includes((name))));
    setData(filteredPlanets);
  }, [filters, unmodifiedData]);

  return (
    <PlanetsContext.Provider
      value={
        { data,
          headers,
          filters,
          columnOptions,
          handleName,
          handleNumericValues,
          removeNumericFilter }
      }
    >
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default PlanetsProvider;

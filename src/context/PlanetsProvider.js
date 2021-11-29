import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import PlanetsContext from './PlanetsContext';
import fetchPlanets from '../services/planetsAPI';

function PlanetsProvider({ children }) {
  const initialState = {
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
    order: {
      column: 'name',
      sort: 'ASC',
    },
  };

  const [data, setData] = useState([]);
  const [filters, setFilters] = useState(initialState);
  const [columnOptions, setColumnOptions] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);

  useEffect(() => {
    const getPlanets = async () => {
      const { results } = await fetchPlanets();
      setData(results);
    };

    getPlanets();
  }, []);

  const handleChangeNameFilter = (search) => {
    setFilters({
      ...filters,
      filterByName: {
        ...filters.filterByName,
        name: search,
      },
    });
  };

  const handleClickNumericFilter = (numericFilter) => {
    const { filterByNumericValues } = filters;
    setFilters({
      ...filters,
      filterByNumericValues: [
        ...filterByNumericValues, numericFilter,
      ],
    });

    setColumnOptions(
      columnOptions.filter((option) => option !== numericFilter.column),
    );
  };

  const removeNumericFilter = (filterColumn) => {
    const { filterByNumericValues } = filters;

    setFilters({
      ...filters,
      filterByNumericValues: filterByNumericValues.filter(
        ({ column }) => column !== filterColumn,
      ),
    });

    setColumnOptions([
      ...columnOptions,
      filterColumn,
    ]);
  };

  const handleClickSortFilter = (order) => {
    setFilters({
      ...filters,
      order,
    });
  };

  const context = {
    data,
    setData,
    filters,
    setFilters,
    columnOptions,
    setColumnOptions,
    handleChangeNameFilter,
    handleClickNumericFilter,
    removeNumericFilter,
    handleClickSortFilter,
  };

  return (
    <PlanetsContext.Provider value={ context }>
      { children }
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;

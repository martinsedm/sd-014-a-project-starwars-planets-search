import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import fetchPlanets from '../service/fetchPlanets';

const DEFAULT_FILTERS = {
  filters: {
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
    order: {
      column: 'name',
      sort: 'ASC',
    },
  },
};

function PlanetsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState(DEFAULT_FILTERS);

  useEffect(() => {
    setLoading(true);
    fetchPlanets().then((data) => {
      setPlanets(data);
      setLoading(false);
    });
  }, []);

  const setFilterByName = (name) => {
    setFilters({ filters: { ...filters.filters, filterByName: { name } } });
  };

  const setFilterByNumericValues = (column, comparison, value) => {
    const { filterByNumericValues: curNumericFilters } = filters.filters;
    const filter = {
      column,
      comparison,
      value,
    };
    const newFilters = [filter, ...curNumericFilters];
    setFilters({ filters: { ...filters.filters, filterByNumericValues: newFilters } });
  };

  const deleteFilterByNumericValues = (column) => {
    const { filterByNumericValues: curNumericFilters } = filters.filters;
    const newFilters = curNumericFilters.filter((f) => f.column !== column);
    setFilters({ filters: { ...filters.filters, filterByNumericValues: newFilters } });
  };

  return (
    <PlanetsContext.Provider
      value={ {
        planets,
        loading,
        filters,
        setFilterByName,
        setFilterByNumericValues,
        deleteFilterByNumericValues,
      } }
    >
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;

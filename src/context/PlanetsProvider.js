import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import PlanetsContext from './PlanetsContext';
import fetchAPI from '../services/fetchAPI';

function PlanetsProvider({ children }) {
  const INITIAL_STATE = {
    filters: {
      filterByName: {
        name: '',
      },
    },
    filterByNumericValues: [],
  };

  const FILTER_OPTIONS = {
    column: '',
    comparison: '',
    value: '',
  };

  const COLUMN_OPTIONS = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(INITIAL_STATE);
  const [changeFilter, setChangeFilter] = useState(FILTER_OPTIONS);
  const [columnOptions, setColumnOptions] = useState(COLUMN_OPTIONS);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchAPI();
      setData(result);
    };
    fetchData();
  }, []);

  const state = {
    data,
    setData,
    filter,
    setFilter,
    changeFilter,
    setChangeFilter,
    columnOptions,
    setColumnOptions,
  };

  return (
    <PlanetsContext.Provider value={ state }>
      { children }
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;

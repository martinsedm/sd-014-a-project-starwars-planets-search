import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from '../context/Context';
import fetchAPI from '../utils/utils';

function Provider({ children }) {
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
    const fetchResults = async () => {
      const response = await fetchAPI();

      setData(response);
    };
    fetchResults();
  }, []);

  const values = {
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
    <Context.Provider value={ values }>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;

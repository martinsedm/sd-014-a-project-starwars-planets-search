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
    filterByNumericValues: [
      {
        column: '',
        comparison: '',
        value: '',
      },
    ],
  };

  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(INITIAL_STATE);

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

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import PlanetsContext from './PlanetsContext';
import fetchPlanets from '../services/planetsAPI';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(0);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [
      {
        column,
        comparison,
        value,
      },
    ],
  });

  useEffect(() => {
    const getPlanets = async () => {
      const { results } = await fetchPlanets();
      setData(results);
    };

    getPlanets();
  }, []);

  const context = {
    data,
    filters,
    setFilters,
    column,
    setColumn,
    comparison,
    setComparison,
    value,
    setValue,
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

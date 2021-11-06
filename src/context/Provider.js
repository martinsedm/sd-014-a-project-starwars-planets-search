import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { fetchPlanets } from '../services';
import PlanetsContext from './PlanetsContext';

function Provider({ children }) {
  const INITIAL_FILTER = {
    filterByName: { name: '' },
    filterByNumericValues: [
      {
        column: 'population',
        comparison: 'maior que',
        value: '100000',
      },
    ],
  };

  const [planets, setPlanets] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [filters, setFilters] = useState(INITIAL_FILTER);
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  useEffect(() => {
    const callAPI = async () => {
      const ans = await fetchPlanets();
      setPlanets(ans);
      setFilteredPlanets(ans);
    };
    callAPI();
  }, []);

  const contextValue = {
    planets,
    setPlanets,
    isLoading,
    setLoading,
    filters,
    setFilters,
    filteredPlanets,
    setFilteredPlanets,
  };

  return (
    <PlanetsContext.Provider value={ contextValue }>
      {children}
    </PlanetsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default Provider;

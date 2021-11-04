import React, { useCallback, useState, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import { useFilters } from '../hooks/useFilters';
import StarsWarsContext from './StarWarsContext';
import fetchPlanets from '../services';
import { filterReducer, init, INITIAL_STATE_FILTER } from '../reducer';

function StarsWarsProvider(props) {
  const { children } = props;
  const [planets, setPlanets] = useState([]);
  const [planetsRender, setApplyFilters] = useFilters([]);
  const [filters, dispatch] = useReducer(filterReducer, INITIAL_STATE_FILTER, init);

  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState({ hasError: false, message: '' });

  useEffect(() => {
    setApplyFilters(planets, filters);
  }, [planets, filters, setApplyFilters]);

  const getPlanets = useCallback(async () => {
    try {
      setIsFetching(true);
      const { results } = await fetchPlanets();
      setPlanets(results);

      setIsFetching(false);
      setError({ hasError: false, message: '' });
    } catch (err) {
      setError({ hasError: true, message: err.message });
      setIsFetching(false);
    }
  }, []);

  const context = {
    planets,
    planetsRender,
    filters,
    isFetching,
    error,
    dispatch,
    getPlanets,
  };

  return (
    <StarsWarsContext.Provider value={ context }>
      { children }
    </StarsWarsContext.Provider>
  );
}

StarsWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarsWarsProvider;

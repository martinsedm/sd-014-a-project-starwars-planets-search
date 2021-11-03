import React, { useCallback, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import useFilters from '../hooks/useFilters';
import StarsWarsContext from './StarWarsContext';
import fetchPlanets from '../services';

const INITIAL_FILTERS = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
};

function StarsWarsProvider(props) {
  const { children } = props;
  const [planets, setPlanets] = useState([]);
  const [planetsRender, applyFilters] = useFilters([]);
  const [filters, setFilters] = useState(INITIAL_FILTERS);

  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState({ hasError: false, message: '' });

  useEffect(() => {
    applyFilters(planets, filters);
  }, [planets, filters, applyFilters]);

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

  const handleChange = ({ target }, key) => {
    const { name, value } = target;
    setFilters({ ...filters, [key]: { [name]: value } });
  };

  const context = {
    planets,
    planetsRender,
    filters,
    isFetching,
    error,
    handleChange,
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

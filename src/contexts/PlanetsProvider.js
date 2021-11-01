import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import useFetch from '../hooks/useFetch';
import { INITIAL_FILTER, updateFilter } from './useReducerAndActions';
import PlanetsContext from './PlanetsContext';

export default function PlanetsProvider({ children }) {
  const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const { data, loading } = useFetch(URL);

  const [filter, dispatch] = useReducer(updateFilter, INITIAL_FILTER);

  const providerContext = { data, filter, loading, dispatch };

  return (
    <PlanetsContext.Provider value={ providerContext }>
      { children }
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};

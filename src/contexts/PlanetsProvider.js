import React from 'react';
import PropTypes from 'prop-types';
import useFetch from '../hooks/useFetch';
import PlanetsContext from './PlanetsContext';

export default function PlanetsProvider({ children }) {
  const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const { data, loading } = useFetch(URL);

  const providerContext = { data, loading };

  return (
    <PlanetsContext.Provider value={ providerContext }>
      { children }
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};

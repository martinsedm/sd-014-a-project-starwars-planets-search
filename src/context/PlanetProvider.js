import React from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';
import ApiRequest from '../hooks/ApiRequest';

function PlanetProvider({ children }) {
  const { data, loading } = ApiRequest('https://swapi-trybe.herokuapp.com/api/planets/');

  const context = { data, loading };

  return (
    <PlanetContext.Provider value={ context }>
      {children}
    </PlanetContext.Provider>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetProvider;

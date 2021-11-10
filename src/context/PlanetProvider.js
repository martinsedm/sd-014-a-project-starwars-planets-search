import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';
import ApiRequest from '../hooks/ApiRequest';
// import FilterByName from '../hooks/FilterByName';

function PlanetProvider({ children }) {
  const [searchName, setSearchName] = useState('');
  const { data, loading } = ApiRequest('https://swapi-trybe.herokuapp.com/api/planets/');

  const context = { data, loading, searchName, setSearchName };

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

import PropTypes from 'prop-types';
import React from 'react';
import useApi from '../hooks/useApi';
import myContext from './myContext';

export default function Provider({ children }) {
  const { data } = useApi('https://swapi-trybe.herokuapp.com/api/planets/');

  const context = {
    data,
  };
  return (
    <myContext.Provider value={ context }>
      {children}
    </myContext.Provider>

  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

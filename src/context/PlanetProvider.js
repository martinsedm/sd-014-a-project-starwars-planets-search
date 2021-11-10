import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';
import ApiRequest from '../hooks/ApiRequest';

function PlanetProvider({ children }) {
  const [searchName, setSearchName] = useState('');
  const [valueColumn, setValueColumn] = useState('');
  const [valueComparison, setValueComparison] = useState('');
  const [numberBox, setNumberBox] = useState(0);
  const { data, loading } = ApiRequest('https://swapi-trybe.herokuapp.com/api/planets/');

  const context = {
    data,
    loading,
    searchName,
    setSearchName,
    valueColumn,
    setValueColumn,
    valueComparison,
    setValueComparison,
    numberBox,
    setNumberBox };

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

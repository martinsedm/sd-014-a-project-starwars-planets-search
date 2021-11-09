import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';

function PlanetProvider({ children }) {
  const [api, setApi] = useState([]);

  const apiFetch = async () => {
    try {
      const apiResponde = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const data = await apiResponde.json();
      setApi(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PlanetContext.Provider value={ { api, apiFetch } }>
      {children}
    </PlanetContext.Provider>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetProvider;

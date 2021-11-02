import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);

  const getPlanets = async () => {
    const response = await (await fetch('https://swapi-trybe.herokuapp.com/api/planets/')).json();
    setPlanets(response.results);
    setLoading(false);
  };

  const value = {
    planets,
    loading,
    getPlanets,
    setLoading,
  };

  return (
    <PlanetsContext.Provider value={ value }>
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;

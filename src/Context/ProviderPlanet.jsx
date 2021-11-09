import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ContextPlanet from './ContextPlanet';

export default function ProviderPlanets({ children }) {
  const [data, setPlanets] = useState();
  const [loading, setLoading] = useState(true);

  const context = {
    data,
    setPlanets,
    loading,
  };

  useEffect(() => {
    const fetchAPI = async () => {
      const response = await fetch('https://swapi.dev/api/planets/');
      const getPlanets = await response.json();
      getPlanets.results.forEach((element) => delete element.residents);
      setPlanets(getPlanets.results);
      setLoading(false);
    };
    fetchAPI();
  }, []);

  return (
    <ContextPlanet.Provider value={ context }>
      {children}
    </ContextPlanet.Provider>
  );
}

ProviderPlanets.propTypes = {
  children: PropTypes.node.isRequired,
};

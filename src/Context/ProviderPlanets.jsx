import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ContextPlanet from './ContextPlanet';

export default function ProviderPlanets({ children }) {
  const [data, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilter] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [
      {
        column: '',
        comparison: '',
        value: '',
      },
    ],
  });

  function setInputFilter(name) {
    setFilter({
      ...filters, filterByName: { name },
    });
  }

  const context = {
    data,
    setPlanets,
    loading,
    setInputFilter,
    filters,
  };

  useEffect(() => {
    const fetchAPI = async () => {
      const res = await fetch('https://swapi.dev/api/planets/');
      const getPlanets = await res.json();
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

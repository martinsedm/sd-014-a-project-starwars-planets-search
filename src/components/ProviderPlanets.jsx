import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ContextPlanets from './ContextPlanets';

export default function ProviderPlanets({ children }) {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState({
    filterByName: {
      name: '',
    },
  });

  function setInputFilter(name) {
    setFilter({
      ...filter, filterByName: { name },
    });
  }

  const context = {
    planets,
    setPlanets,
    loading,
    setInputFilter,
    filter,
  };

  const url = 'https://swapi.dev/api/planets/';
  useEffect(() => {
    const fetchAPI = async () => {
      const results = await fetch(url);
      const getPlanets = await results.json();
      console.log(getPlanets);
      getPlanets.results.forEach((element) => delete element.residents);
      setPlanets(getPlanets.results);
      setLoading(false);
    };
    fetchAPI();
  }, []);

  return (
    <ContextPlanets.Provider value={ context }>
      { children }
    </ContextPlanets.Provider>
  );
}

ProviderPlanets.propTypes = {
  children: PropTypes.node.isRequired,
};

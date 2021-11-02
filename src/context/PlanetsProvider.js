import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import fetchPlanets from '../services';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({ filterByName: { name: '' } });
  const [planets, setPlanets] = useState([]);
  const { filterByName: { name } } = filters;

  useEffect(() => {
    const getPlanetsInfo = async () => {
      const { results } = await fetchPlanets();
      setData(results);
    };
    getPlanetsInfo();
  }, []);

  useEffect(() => {
    const filteredPlanets = data.filter((planet) => planet.name.includes(name));
    setPlanets(filteredPlanets);
  }, [filters, data, name]);

  const context = { filters, setFilters, planets, setPlanets };

  return (
    <PlanetsContext.Provider value={ context }>
      { children }
    </PlanetsContext.Provider>
  );
}

const { oneOfType, arrayOf, node } = PropTypes;

PlanetsProvider.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired,
};

export default PlanetsProvider;

// useEffect: https://www.pluralsight.com/guides/fetching-data-updating-state-hooks
// PropTypes: https://github.com/tryber/sd-014-a-monitoria/blob/context-api-dog-gallery-28-out-2021/context-api-dog-gallery/src/context/Provider.js

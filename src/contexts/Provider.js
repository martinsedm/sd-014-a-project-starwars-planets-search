import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import fecthPlanets from '../helper/fetchPlanets';
import Context from './Context';

export default function Provider({ children }) {
  const filtersObj = {
    filterByName: {
      name: '',
    },
  };

  const [planets, setPlanets] = useState([]);
  const [filterPlanets, setFilterPlanets] = useState([]);
  const [filters, setFilters] = useState(filtersObj);

  useEffect(() => {
    async function getPlanets() {
      const data = await fecthPlanets();
      setPlanets(data.results);
      setFilterPlanets(data.results);
    }
    getPlanets();
  }, []);

  const Values = {
    filterPlanets,
    setFilterPlanets,
    planets,
    setPlanets,
    filters,
    setFilters,
  };

  return (
    <Context.Provider value={ Values }>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

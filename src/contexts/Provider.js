import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import fecthPlanets from '../helper/fetchPlanets';
import Context from './Context';

export default function Provider({ children }) {
  const filtersObj = {
    filterByName: {
      name: '',
    },
    filterByNumericValues: [
      {
        column: 'population',
        comparison: 'maior que',
        value: '100000',
      },
    ],
  };

  const [planets, setPlanets] = useState([]);
  const [filterPlanets, setFilterPlanets] = useState([]);
  const [filters, setFilters] = useState(filtersObj);
  const [columns, setColumns] = useState();

  useEffect(() => {
    async function getPlanets() {
      const data = await fecthPlanets();
      setPlanets(data.results);
      setFilterPlanets(data.results);
      setColumns(Object.keys(data.results[0]));
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
    columns,
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

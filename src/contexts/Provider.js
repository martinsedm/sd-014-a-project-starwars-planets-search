import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import fecthPlanets from '../helper/fetchPlanets';
import Context from './Context';
// API caiu...
// import testData from '../testData';

export default function Provider({ children }) {
  const filtersObj = {
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
    order: {
      column: 'name',
      sort: 'ASC',
    },
  };

  const [planets, setPlanets] = useState([]);
  const [filterPlanets, setFilterPlanets] = useState([]);
  const [filters, setFilters] = useState(filtersObj);
  const col = ['population', 'orbital_period',
    'diameter', 'rotation_period', 'surface_water'];
  const [columns, setColumns] = useState(col);

  function inicialSort(sorte) {
    return sorte.sort((a, b) => {
      console.log('string', a.name);
      return (String(a.name)).localeCompare(String(b.name));
    });
  }

  useEffect(() => {
    async function getPlanets() {
      const data = await fecthPlanets();
      // if (!data.results) { data = testData; }
      // console.log(x);
      // const data = testData;
      setPlanets(data.results);
      setFilterPlanets(inicialSort(data.results));
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
    setColumns,
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

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';
import getApi from '../services/getApi';

function MyProvider({ children }) {
  const INITIAL_FILTERS = {
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  };

  const NUMERIC_FILTER = {
    column: '',
    comparison: '',
    value: '',
  };

  const [filter, setFilter] = useState(INITIAL_FILTERS);
  const [planets, setPlanets] = useState([]);
  const [filteredPlanets, setFilteredPlanets] = useState(planets);
  const [numericFilter, setNumericFilter] = useState(NUMERIC_FILTER);
  const [selectedColumn, setSelectedComun] = useState();
  const { filterByName: { name } } = filter;

  useEffect(() => {
    const fetchPlanet = async () => {
      const result = await getApi();
      setPlanets(result);
    };
    fetchPlanet();
  }, []);

  useEffect(() => {
    const filtereds = planets
      .filter((planet) => planet.name.includes(name.toLowerCase()));
    setFilteredPlanets(filtereds);
  }, [name, planets]);

  const contextValue = {
    filter,
    setFilter,
    planets,
    setPlanets,
    filteredPlanets,
    setFilteredPlanets,
    numericFilter,
    setNumericFilter,
    selectedColumn,
    setSelectedComun,
  };

  return (
    <MyContext.Provider value={ contextValue }>
      { children }
    </MyContext.Provider>
  );
}

MyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MyProvider;

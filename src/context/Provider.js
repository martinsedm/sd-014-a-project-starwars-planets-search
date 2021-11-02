import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import planetsContext from './planetsContext';

const Provider = ({ children }) => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [filter, setFilter] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [],
  });

  const fetchPlanets = async () => {
    const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const json = await response.json();
    const planets = json.results;
    setData(planets);
    setLoading(false);
  };

  const changeNameFilter = (name) => {
    setFilter({
      ...filter,
      filterByName: {
        ...filter.filterByName,
        name,
      },
    });
  };
  const addNumericFilter = (newFilter) => {
    setFilter({
      ...filter,
      filterByNumericValues: filter.filterByNumericValues.concat(newFilter),
    });
  };

  useEffect(() => {
    fetchPlanets();
  }, []);

  const context = {
    data, isLoading, filter, changeNameFilter, addNumericFilter,
  };

  return (
    <planetsContext.Provider value={ context }>
      { children }
    </planetsContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;

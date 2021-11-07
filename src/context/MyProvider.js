import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';
import getApi from '../services/getApi';

function MyProvider({ children }) {
  const INITIAL_FILTERS = {
    filters: {
      filterByName: {
        name: '',
      },
      filterByNumericValues: [],
    },
  };

  const NUMERIC_FILTER = {
    column: '',
    comparison: '',
    value: '',
  };

  const [filter, setFilter] = useState(INITIAL_FILTERS);
  const [planets, setPlanets] = useState([]);
  const [numericFilter, setNumericFilter] = useState(NUMERIC_FILTER);

  useEffect(() => {
    const fetchPlanet = async () => {
      const result = await getApi();
      setPlanets(result);
    };
    fetchPlanet();
  }, []);

  const contextValue = {
    filter,
    setFilter,
    planets,
    setPlanets,
    numericFilter,
    setNumericFilter,
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

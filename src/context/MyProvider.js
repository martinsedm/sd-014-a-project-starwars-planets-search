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
    },
  };

  const [filter, setFilter] = useState(INITIAL_FILTERS);
  const [planets, setPlanets] = useState([]);

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

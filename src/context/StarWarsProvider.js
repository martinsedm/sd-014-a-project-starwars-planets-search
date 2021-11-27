import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import fetchApi from '../services';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [filterPlanets, setFilterPlanets] = useState('');

  const dataApi = async () => {
    const { results } = await fetchApi();
    setData(results);
  };

  const handleChange = ({ target }) => {
    setFilterPlanets(target.value);
  };

  useEffect(() => {
    dataApi();
  }, []);

  const contextValue = { data, filterPlanets, handleChange };

  return (
    <StarWarsContext.Provider value={ contextValue }>
      { children }
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarsProvider;

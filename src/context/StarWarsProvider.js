import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

const StarWarsProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const urlApi = 'https://swapi-trybe.herokuapp.com/api/planets/';
  useEffect(() => {
    async function fetchData() {
      const { results } = await fetch(urlApi).then((response) => response.json());
      setData(results);
    }
    fetchData();
  }, []);

  const valueDefault = {
    data,
    setData,
  };

  return (
    <StarWarsContext.Provider value={ valueDefault }>
      {children}
    </StarWarsContext.Provider>
  );
};

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarsProvider;

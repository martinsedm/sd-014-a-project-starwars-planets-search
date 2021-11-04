import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import myContext from './myContext';

function MyProvider({ children }) {
  const [data, setData] = useState([{}]);

  const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const fecthAPI = async () => {
    const dataResponse = await fetch(URL);
    const dataResponseJson = await dataResponse.json();
    const { results } = dataResponseJson;
    setData(results);
  };

  useEffect(() => {
    fecthAPI();
  }, []);

  const context = {
    data,
    teste: 'teste',
  };

  return (
    <myContext.Provider value={ context }>
      {children}
    </myContext.Provider>
  );
}

MyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MyProvider;

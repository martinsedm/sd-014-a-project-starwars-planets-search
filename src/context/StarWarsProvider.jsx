import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarwarsContext from './StarwarsContext';

function StarwarsProvider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function Api() {
      const api = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const resultApi = await api.json();
      const resultado = await resultApi.results;
      resultado.map((infos) => delete infos.residents);
      setData(resultado);
    }

    Api();
  }, []);

  const planetas = {
    data,
    setData,
  };
  return (
    <StarwarsContext.Provider value={ planetas }>
      { children }
    </StarwarsContext.Provider>
  );
}

const { oneOfType, arrayOf, node } = PropTypes;

StarwarsProvider.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired,
};

export default StarwarsProvider;

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarwarsContext from './StarwarsContext';

function StarwarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
  });
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(0);
  const [newColumn, setnewColumn] = useState('');

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

  const context = {
    data,
    setData,
    filters,
    setFilters,
    column,
    setColumn,
    comparison,
    setComparison,
    value,
    setValue,
    newColumn,
    setnewColumn,
  };
  return (
    <StarwarsContext.Provider value={ context }>
      { children }
    </StarwarsContext.Provider>
  );
}

const { oneOfType, arrayOf, node } = PropTypes;

StarwarsProvider.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired,
};

export default StarwarsProvider;

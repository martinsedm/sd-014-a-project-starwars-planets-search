import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import StarWarsContext from './StarWarsContext';
import fetchApi from '../services/fetchApi';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('0');
  const [filter, setFilter] = useState({
    filters: {
      filterByName: {
        name: '',
      },
      filterByNumericValues: [
        {
          column,
          comparison,
          value,
        },
      ],
    },
  });

  useEffect(() => {
    async function getData() {
      const dataPlanets = await fetchApi();
      setData(dataPlanets);
    }
    getData();
  }, []);

  const context = {
    data,
    setData,
    column,
    setColumn,
    comparison,
    setComparison,
    value,
    setValue,
    filter,
    setFilter,
  };

  return (
    <StarWarsContext.Provider value={ context }>
      {children}
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired, // Consulta para resolução dessa linha  https://stackoverflow.com/questions/42122522/reactjs-what-should-the-proptypes-be-for-this-props-children
};

export default StarWarsProvider;

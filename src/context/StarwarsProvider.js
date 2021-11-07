import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import StarwarsContext from './StarwarsContext';

function StarwarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [values, setValues] = useState('');
  const [filter, setFilter] = useState([]);
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);
  console.log(filterByNumericValues);
  console.log(column);
  const contextFilters = {
    data,
    name,
    column,
    comparison,
    values,
    filter,
    filterByNumericValues,
    setData,
    setName,
    setColumn,
    setComparison,
    setValues,
    setFilter,
    setFilterByNumericValues,
  };

  const starwarsApi = async () => {
    const request = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const { results } = await request.json();
    const filteredResults = results.map((result) => {
      delete result.residents;
      return result;
    });
    setData(filteredResults);
    setFilter(filteredResults);
  };

  useEffect(() => {
    starwarsApi();
  }, []);

  return (
    <StarwarsContext.Provider value={ contextFilters }>
      { children }
    </StarwarsContext.Provider>
  );
}

StarwarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default StarwarsProvider;

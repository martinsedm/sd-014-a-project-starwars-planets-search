import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import fetchApi from '../services';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [filterPlanets, setFilterPlanets] = useState('');
  const [filterNumeric, setFilterNumeric] = useState({
    filterByNumericValues: [],
  });
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(0);

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

  const contextValue = {
    data,
    setData,
    filterPlanets,
    handleChange,
    filterNumeric,
    setFilterNumeric,
    column,
    comparison,
    value,
    setColumn,
    setComparison,
    setValue,
  };

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

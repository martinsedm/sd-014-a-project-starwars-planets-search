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
  const [options, setOptions] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);

  const dataApi = async () => {
    const { results } = await fetchApi();
    setData(results);
  };

  const changeName = ({ target }) => {
    setFilterPlanets(target.value);
  };

  useEffect(() => {
    dataApi();
  }, []);

  const contextValue = {
    data,
    setData,
    filterPlanets,
    changeName,
    filterNumeric,
    setFilterNumeric,
    column,
    comparison,
    value,
    options,
    setColumn,
    setComparison,
    setValue,
    setOptions,
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

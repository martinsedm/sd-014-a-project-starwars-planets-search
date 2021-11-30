import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import fetchApi from '../services';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [],
    order: {
      column: 'name',
      sort: 'ASC',
    },
  });
  const [filterPlanets, setFilterPlanets] = useState('');
  const [filterNumeric, setFilterNumeric] = useState([]);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(0);
  const filterOptions = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];
  const [options, setOptions] = useState(filterOptions);

  const dataApi = async () => {
    const { results } = await fetchApi();
    setData(results);
    setFilterNumeric(results);
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
    column,
    comparison,
    value,
    options,
    setColumn,
    setComparison,
    setValue,
    setOptions,
    filters,
    setFilters,
    setFilterPlanets,
    filterNumeric,
    setFilterNumeric,
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

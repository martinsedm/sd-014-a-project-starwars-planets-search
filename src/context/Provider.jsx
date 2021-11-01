/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import StarContext from './context';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState('');
  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const [value, setValue] = useState('');
  const [dropDown, setDropDown] = useState(['population',
    'orbital_period', 'diameter', 'rotation_period',
    'surface_water']);
  const [filters, setFilter] = useState(
    {
      filterByName: {
        name: '',
      },
      filterByNumericValues: [],
    },
  );

  const getPlanets = async () => {
    const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const planet = await response.json();
    setData(planet.results);
    setFilterData(planet.results);
    setLoading(false);
  };

  const filterFunction = () => {
    const number = Number(value);
    let filtered;
    switch (comparison) {
    case 'maior que':
      filtered = data.filter((planet) => Number(planet[column]) > number);
      return filtered;
    case 'menor que':
      filtered = data.filter((planet) => Number(planet[column]) < number);
      return filtered;
    case 'igual a':
      filtered = data.filter((planet) => Number(planet[column]) === number);
      return filtered;
    default:
      return console.log('def');
    }
  };

  useEffect(() => {
    setFilter({ ...filters, filterByName: name });
  }, [name]);

  useEffect(() => {
    setFilterData(filterFunction());
  }, [filters.filterByNumericValues]);

  const prov = {
    data,
    setData,
    loading,
    setLoading,
    getPlanets,
    filters,
    setFilter,
    setFilterData,
    setName,
    name,
    filterData,
    column,
    setColumn,
    comparison,
    setComparison,
    value,
    setValue,
    dropDown,
    setDropDown,
  };

  return (
    <StarContext.Provider value={ prov }>
      {children}
    </StarContext.Provider>
  );
}

Provider.propTypes = {
  children: propTypes.node.isRequired,
};

export default Provider;

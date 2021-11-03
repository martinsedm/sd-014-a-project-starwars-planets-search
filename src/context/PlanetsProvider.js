import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import PlanetsContext from './PlanetsContext';

const COLUMN_CATEGORIES = ['population',
  'orbital_period', 'diameter', 'rotation_period', 'surface_water'];

const PlanetsProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState('');
  const [column, setColumn] = useState('');
  const [comparasion, setComparasion] = useState('');
  const [value, setValue] = useState('');
  const [columnCategories, setColumnCategories] = useState(COLUMN_CATEGORIES);
  const [filter, setFilter] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  });

  const fetchData = async () => {
    setLoading(true);
    const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const responseJson = await response.json();

    setData(responseJson.results);
    setLoading(false);
  };

  useEffect(() => {
    setFilter({ ...filter, filterByName: { name } });
  }, [name]);

  useEffect(() => {
    let filteredData;

    if (comparasion === 'maior que') {
      filteredData = data
        .filter((planet) => Number(planet[column]) > Number((value)));
    } else if (comparasion === 'menor que') {
      filteredData = data
        .filter((planet) => Number(planet[column]) < Number((value)));
    } else if (comparasion === 'igual a') {
      filteredData = data
        .filter((planet) => Number(planet[column]) === Number((value)));
    }

    setData(filteredData);
  }, [filter.filterByNumericValues]);

  return (
    <PlanetsContext.Provider
      value={ {
        loading,
        data,
        name,
        filter,
        value,
        column,
        comparasion,
        columnCategories,
        setColumnCategories,
        setName,
        setFilter,
        setColumn,
        setComparasion,
        setValue,
        fetchData } }
    >
      { children }
    </PlanetsContext.Provider>
  );
};

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;

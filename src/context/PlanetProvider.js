import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Api from '../services/Api';
import ContextPlanet from './ContextPlanet';

function PlanetProvider({ children }) {
  const [data, setData] = useState([]);
  const [dataFilters, setDataFilters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState({
    filterByName: {
      name: '',
    },
  });
  const [filters, setFilters] = useState({
    filterByNumericValues: [],
  });

  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(0);
  const [filterRemove, setFilterRemove] = useState();
  const [options, setOptions] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);

  async function fetchPlanet() {
    const chamadaApi = await Api();
    setData(chamadaApi);
    setIsLoading(false);
    setDataFilters(chamadaApi);
  }
  useEffect(() => {
    fetchPlanet();
  }, []);

  useEffect(() => {
    let filtro = [...data];
    filters.filterByNumericValues.forEach((elemento) => {
      filtro = filtro.filter((planeta) => {
        switch (elemento.comparison) {
        case 'maior que':
          return parseFloat(planeta[elemento.column]) > parseFloat(elemento.value);
        case 'menor que':
          return parseFloat(planeta[elemento.column]) < parseFloat(elemento.value);
        default:
          return planeta[elemento.column] === elemento.value;
        }
      });
    });

    setDataFilters(filtro);
  }, [filters, data]);

  const handleChange = ({ target }) => {
    const filterSearch = target.value;

    setFilter({
      ...filter,
      filterByName: {
        name: filterSearch,
      },
    });
  };

  const context = {
    data,
    isLoading,
    filter,
    column,
    comparison,
    value,
    filters,
    options,
    dataFilters,
    filterRemove,
    handleChange,
    setFilter,
    setData,
    setIsLoading,
    setColumn,
    setComparison,
    setValue,
    setFilters,
    setOptions,
    setFilterRemove,
  };
  return (
    <ContextPlanet.Provider value={ context }>
      { children }
    </ContextPlanet.Provider>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetProvider;

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

  const [nameColumn, setNameColumn] = useState('name');
  const [ordem, setOrdem] = useState('ASC');

  const comparar = (a, b) => {
    const descNumber = -1;
    if (a > b) {
      return 1;
    }
    if (a < b) {
      return descNumber;
    }
    return 0;
  };

  const sortElement = (columns, sort) => {
    const planetsArray = [...dataFilters];
    if (column === 'name') {
      if (sort === 'ASC') {
        planetsArray.sort((a, b) => comparar(a[columns], b[columns]));
      }
      if (sort === 'DESC') {
        planetsArray.sort((a, b) => comparar(b[columns], a[columns]));
      }
    } else {
      if (sort === 'ASC') {
        planetsArray.sort((a, b) => comparar(Number(a[columns]), Number(b[columns])));
      }
      if (sort === 'DESC') {
        planetsArray.sort((a, b) => comparar(Number(b[columns]), Number(a[columns])));
      }
    }
    setDataFilters(planetsArray);
  };

  async function fetchPlanet() {
    const chamadaApi = await Api();
    setData(chamadaApi);
    setIsLoading(false);
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

  useEffect(() => {
    const planetsArray = [...data];
    const initialSort = (coluna) => {
      planetsArray.sort((a, b) => comparar(a[coluna], b[coluna]));
      setDataFilters(planetsArray);
    };
    initialSort('name');
  }, [data]);

  const context = {
    data,
    isLoading,
    filter,
    column,
    comparison,
    value,
    filters,
    options,
    nameColumn,
    ordem,
    dataFilters,
    filterRemove,
    handleChange,
    sortElement,
    setFilter,
    setData,
    setIsLoading,
    setColumn,
    setComparison,
    setValue,
    setFilters,
    setOptions,
    setFilterRemove,
    setNameColumn,
    setOrdem,
  };
  return (
    <ContextPlanet.Provider value={ context }>
      {children}
    </ContextPlanet.Provider>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetProvider;

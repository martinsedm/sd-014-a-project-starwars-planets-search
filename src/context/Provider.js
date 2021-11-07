import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import AppContext from './AppContext';
import fetchData from '../services/fetchData';

export default function Provider({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [columnOptions, setColumnOptions] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  });
  const [filteredData, setFilteredData] = useState([]);

  async function getData() {
    const results = await fetchData();
    const resultsWithoutResidentsKey = await results.map((res) => {
      delete res.residents;
      return res;
    });
    setData(resultsWithoutResidentsKey);
    setLoading(false);
  }

  function changeName(name) {
    setFilters({
      ...filters,
      filterByName: { name },
    });
  }

  function setNumericValues(column, comparison, number) {
    setFilters({
      ...filters,
      filterByNumericValues:
        [...filters.filterByNumericValues, { column, comparison, number }],
    });
  }

  useEffect(() => {
    const { filterByNumericValues } = filters;
    if (filterByNumericValues.length > 0) {
      const {
        column,
        comparison,
        number,
      } = filterByNumericValues[filterByNumericValues.length - 1];
      console.log(column, comparison, number);
      let filtered = [...data];
      switch (comparison) {
      case 'maior que':
        filtered = data.filter((planet) => Number(planet[column]) > number);
        break;
      case 'menor que':
        filtered = data.filter((planet) => Number(planet[column]) < number);
        break;
      case 'igual a':
        filtered = data.filter((planet) => Number(planet[column]) === number);
        break;
      default:
        throw new Error('Essa opção não existe!');
      }
      setFilteredData([...filtered]);
    } else { setFilteredData(data); }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters.filterByNumericValues]);

  function removeSelectedColumn(column) {
    const filteredOptions = columnOptions
      .filter((columnOption) => columnOption !== column);
    setColumnOptions(filteredOptions);
  }

  const context = { data,
    getData,
    loading,
    filters,
    changeName,
    setData,
    setNumericValues,
    removeSelectedColumn,
    columnOptions,
    setFilters,
    filteredData,
  };

  return (
    <AppContext.Provider value={ context }>
      <div className="bg-black text-gray-500">
        { children }
      </div>
    </AppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

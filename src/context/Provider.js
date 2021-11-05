import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import AppContext from './AppContext';
import fetchData from '../services/fetchData';

export default function Provider({ children }) {
  // DOM
  // const columnFilter = document.getElementById('column-filter');

  // ESTADOS
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [column, setColumn] = useState('population');
  const [columnOptions, setColumnOptions] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);
  const [comparison, setComparison] = useState('maior que');
  const [number, setNumber] = useState(0);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  });

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

  useEffect(() => {
    const { filterByNumericValues } = filters;
    if (filterByNumericValues.length > 0) {
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
      setData([...filtered]);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters.filterByNumericValues]);

  function setNumericValues() {
    setFilters({
      ...filters,
      filterByNumericValues: [{ column, comparison, number }],
    });
  }

  function removeSelectedColumn() {
    const filteredOptions = columnOptions
      .filter((columnOption) => columnOption !== column);
    setColumnOptions(filteredOptions);
  }

  const context = { data,
    getData,
    loading,
    filters,
    setNumber,
    setColumn,
    setComparison,
    changeName,
    number,
    setData,
    setNumericValues,
    removeSelectedColumn,
    columnOptions,
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

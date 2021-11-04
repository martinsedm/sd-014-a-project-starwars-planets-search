import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import AppContext from './AppContext';
import fetchData from '../services/fetchData';

export default function Provider({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [column, setColumn] = useState('population');
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
        console.log('opção não esperada');
        break;
      }
      setData([...filtered]);
    }
  }, [filters.filterByNumericValues]);

  function setNumericValues() {
    setFilters({
      ...filters,
      filterByNumericValues: [{ column, comparison, number }],
    });
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

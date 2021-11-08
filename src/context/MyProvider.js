import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import AppContext from './MyContext';

import apir from '../services/ApiRequisicao';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filterNamePlanet, setFilterNamePlanet] = useState('');
  const [filterByName, setFilterByName] = useState([{
    filterByName: {
      name: '',
    },
    filterByNumericValues: [
      {
        column: 'population',
        comparison: 'maior que',
        value: '100000',
      },
    ] }]);
  const [titulos, setTitulos] = useState(['population', 'orbital_period', 'diameter',
    'rotation_period', 'surface_water']);
  const [value, setValue] = useState('');
  const [column, setFilterColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const [newColumn, setNewColumn] = useState([
    {
      column: '',
      comparison: '',
      value: '',
    },
  ]);

  useEffect(() => {
    async function fetchData() {
      const { results } = await apir();
      setData(results);
      setLoading(true);
    }
    fetchData();
  }, []);

  function tabelas() {
    if (column && comparison && value) {
      const filtrar = data.filter((planet) => {
        const nValue = Number(planet[column]);
        if (comparison === 'maior que') {
          return nValue > Number(value);
        } if (comparison === 'menor que') {
          return nValue < Number(value);
        } if (comparison === 'igual a') {
          return nValue === Number(value);
        }
        return nValue;
      });
      setData(filtrar);
    }
  }

  const filterNames = (plan) => {
    const filterName = plan.filter((n) => n.name.includes(filterNamePlanet));
    return filterName;
  };

  function removeColumn() {
    const newColumns = [...filterByName.filterByNumericValues];
    setNewColumn(newColumns);
    const removeFilter = titulos.filter((e) => e !== column);
    setTitulos(removeFilter);
  }
  useEffect(() => {
    setFilterByName({
      filterByName: {
        name: filterNamePlanet,
      },
      filterByNumericValues: [
        {
          column,
          comparison,
          value,
        },
        { newColumn },
      ],
    });
  }, [filterNamePlanet, column, comparison, value, newColumn]);

  const contextValue = {
    data,
    setData,
    loading,
    setLoading,
    filterByName,
    setFilterByName,
    filterNamePlanet,
    setFilterNamePlanet,
    filterNames,
    setValue,
    setFilterColumn,
    setComparison,
    tabelas,
    removeColumn,
    titulos,
  };

  return (
    <AppContext.Provider value={ contextValue }>
      {children}
    </AppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.any,
}.isRequired;

export default Provider;

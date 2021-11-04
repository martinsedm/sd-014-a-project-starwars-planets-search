import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import Context from './Context';
import fetchAPI from '../services/API';

export default function Provider({ children }) {
  const [project, updateProject] = useState([]);
  const [newColumn, setNewColumn] = useState([
    {
      column: '',
      comparison: '',
      value: '',
    },
  ]);
  const [options, setOptions] = useState(['population', 'orbital_period', 'diameter',
    'rotation_period', 'surface_water']);
  const [value, setValue] = useState('');
  const [column, setFilterColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const [isLoading, updateIsLoading] = useState(true);
  const [searchText, setSearchText] = useState('');
  const [filters, setFilters] = useState([{
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

  useEffect(() => {
    async function fetchA() {
      const { results } = await fetchAPI();
      results.forEach((a) => delete a.residents);
      updateProject(results);
      updateIsLoading(false);
    }
    fetchA();
  }, []);

  const filterMap = (data) => {
    const filterName = data.filter((n) => n.name.toLowerCase()
      .includes(searchText.toLowerCase()));
    return filterName;
  };

  function addRemoveColumn() {
    const newColumns = [...filters.filterByNumericValues];
    setNewColumn(newColumns);
    const removeFilter = options.filter((e) => e !== column);
    setOptions(removeFilter);
  }

  // lógica do colega Fernando Nascimento Monteiro
  function tableSearch() {
    if (column && comparison && value) {
      const toCompare = Number(value);
      const filtro = project.filter((planet) => {
        const buscaValue = Number(planet[column]);
        switch (comparison) {
        case 'maior que':
          return buscaValue > toCompare;
        case 'menor que':
          return buscaValue < toCompare;
        case 'igual a':
          return buscaValue === toCompare;
        default:
          return buscaValue;
        }
      });
      updateProject(filtro);
    }
  }

  useEffect(() => {
    setFilters({
      filterByName: {
        name: searchText,
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
  }, [comparison, column, newColumn, searchText, value]);

  const valuesContext = {
    project,
    isLoading,
    searchText,
    setSearchText,
    filters,
    filterMap,
    setValue,
    setFilterColumn,
    setComparison,
    tableSearch,
    addRemoveColumn,
    options,
  };

  return (
    <Context.Provider value={ valuesContext }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

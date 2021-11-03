import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import Context from './Context';
import fetchAPI from '../services/API';

export default function Provider({ children }) {
  const [project, updateProject] = useState([]);
  const [value, setValue] = useState('');
  const [filterColumn, setFilterColumn] = useState('');
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

  // lógica do colega Fernando Nascimento Monteiro
  function tableSearch() {
    if (filterColumn && comparison && value) {
      const toCompare = Number(value);
      const filtro = project.filter((planet) => {
        const buscaValue = Number(planet[filterColumn]);
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
          column: filterColumn,
          comparison,
          value,
        },
      ],
    });
  }, [comparison, filterColumn, searchText, value]);

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

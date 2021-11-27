import React, { useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import ContextStar from './ContextStar';
import requisitionPlanets from '../services/api';

function ProviderStar({ children }) {
  // salvar as as informações que foram resgatadas da API.
  const [planets, setPlanets] = useState([]);
  // reescreve o (planets) com base dos fltros, ou seja, as novas informações da API filtradas.
  const [filterData, setFilterData] = useState([]);
  // guarda os filtros/informações do input que serão utilizados.
  const [filters, setFilters] = useState(
    { filterByName: { name: '' },
      filterByNumericValues: [],
      order: {
        column: 'name',
        sort: 'ASC',
      } },
  );
  // estados do meu select.
  const [filterSelect, setFilterSelect] = useState('population');
  // estado do select
  const [filterComparation, setFilterComparation] = useState('maior que');
  // estado do select
  const [filterInput, setFilterInput] = useState('10000');
  // const [filterObject, setFilterObject] = useState([]);
  const [columnList, setColumnList] = useState([]);

  const [orderColumn, setOrderColumn] = useState('');
  const [orderType, setOrderType] = useState(false);

  const orderOptions = [
    'name',
    'climate',
    'created',
    'diameter',
    'edited',
    'gravity',
    'orbital_period',
    'population',
    'rotation_period',
    'surface_water',
    'terrain',
  ];

  const categories = [
    'name',
    'climate',
    'created',
    'edited',
    'gravity',
    'terrain',
  ];

  const sorting = (ordered, num, a, b) => {
    const { order } = filters;
    const findCategory = categories.find((cat) => cat === ordered.column);
    const magicNumber = -1;
    if (order.sort === 'ASC') {
      if (findCategory) {
        return a[ordered.column] > b[ordered.column] ? 1 : magicNumber;
      }
      return num > 0 ? 1 : magicNumber;
    }
    if (findCategory) {
      return b[order.column] > a[order.column] ? 1 : magicNumber;
    }
    return num > 0 ? magicNumber : 1;
  };

  const setSort = (useCallback((array) => {
    const { order } = filters;
    const salaryArray = array.sort((a, b) => {
      const num = a[order.column] - b[order.column];
      return sorting(order, num, a, b);
    });
    setFilterData(salaryArray);
  // eslint-disable-next-line
  }, [filters]));

  useEffect(() => {
    const { filterByName: { name } } = filters;
    let resultFilterNames = [...planets];
    if (name !== '') {
      resultFilterNames = resultFilterNames
        .filter((planet) => (
          (planet.name.toLowerCase()).includes(name.toLowerCase())
        ));
    }

    const { filterByNumericValues } = filters;
    filterByNumericValues.forEach((filter) => {
      // comparação númerica entre chaves e valores.
      if (filter.comparison === 'maior que') {
        resultFilterNames = resultFilterNames.filter(
          (planet) => +planet[filter.column] > +filter.value,
        );
      }

      if (filter.comparison === 'menor que') {
        resultFilterNames = resultFilterNames.filter(
          (planet) => +planet[filter.column] < +filter.value,
        );
      }

      if (filter.comparison === 'igual a') {
        resultFilterNames = resultFilterNames.filter(
          (planet) => +planet[filter.column] === +filter.value,
        );
      }
    });

    setSort(resultFilterNames);
  }, [filters, planets, setSort]);

  async function InfoPlanetsAPI() {
    const saveInfos = await requisitionPlanets();
    setPlanets(saveInfos);
  }

  function handleClickInput({ target }) {
    setFilterInput(target.value);
  }

  function handleClickSelect({ target }) {
    setFilterSelect(target.value);
  }

  function handleClickComparison({ target }) {
    setFilterComparation(target.value);
  }

  function removeNewElementHtml(filterColumn) {
    setFilters({
      ...filters,
      filterByNumericValues: filters.filterByNumericValues
        .filter(({ column }) => column !== filterColumn),
    });
  }

  const toSort = () => {
    const filtered = {
      column: orderColumn,
      sort: orderType,
    };
    setFilters({ ...filters, order: filtered });
  };

  function handleButton() {
    const { filterByNumericValues } = filters;
    // quero que o valor final dos valores do meu input sejam enviados para o array ao clique do botão.
    const addColumn = [...columnList];
    addColumn.push(filterSelect);
    setColumnList(addColumn);
    const newFilters = {
      ...filters,
      filterByNumericValues: [
        {
          column: filterSelect,
          comparison: filterComparation,
          value: filterInput,
        },
        ...filterByNumericValues,
      ],
    };
    setFilters(newFilters);
  }

  return (
    <ContextStar.Provider
      value={ {
        InfoPlanetsAPI,
        planets,
        setFilters,
        filters,
        filterData,
        handleClickSelect,
        handleClickComparison,
        handleClickInput,
        filterSelect,
        setFilterSelect,
        filterComparation,
        setFilterComparation,
        filterInput,
        setFilterInput,
        handleButton,
        columnList,
        removeNewElementHtml,
        toSort,
        orderOptions,
        setSort,
        orderColumn,
        setOrderColumn,
        orderType,
        setOrderType,
      } }
    >
      { children }
    </ContextStar.Provider>
  );
}

ProviderStar.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProviderStar;

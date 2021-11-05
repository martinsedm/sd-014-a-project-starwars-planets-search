import React, { useState } from 'react';
import PropTypes from 'prop-types';
import filterContext from './filterContext';

function FilterProvider(props) {
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('');
  const columns = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water'];
  const [selectColumns, setSelectColumns] = useState(columns);
  const [data, setData] = useState([]);
  const [dataFilt, setDataFilt] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
    order: {
      column: 'name',
      sort: 'ASC',
    },
  });

  const [sort, setSort] = useState('ASC');
  const [columnState, setColumnState] = useState('name');

  const retAPi = [...dataFilt];
  const { children } = props;

  const handleChange = async ({ target }) => {
    if (target.value) {
      const filterPlanets = retAPi.filter((planet) => (
        planet.name.toLowerCase().includes(`${target.value.toLowerCase()}`)));
      await setDataFilt(
        filterPlanets,
      );
    } else {
      setDataFilt(data);
    }
    setFilters({ ...filters,
      filterByName: {
        name: target.value,
      } });
  };

  const handleClick = (coluna, comparacao, valor) => {
    if (coluna && comparacao && valor) {
      const filterPlanets = retAPi.filter((planet) => {
        const planetNumber = Number(planet[coluna]);
        const valueComparison = Number(valor);
        switch (comparacao) {
        case 'maior que':
          return planetNumber > valueComparison;
        case 'menor que':
          return planetNumber < valueComparison;
        case 'igual a':
          return planetNumber === valueComparison;
        default:
          return planetNumber;
        }
      });
      setDataFilt(filterPlanets);
      setSelectColumns(selectColumns.filter((col) => col !== coluna));
    } else {
      setDataFilt(data);
    }
  };

  const handleColumns = (colu) => {
    const newCols = [...selectColumns, colu];
    setSelectColumns(newCols);
  };

  const sortPlanets = dataFilt.sort((a, b) => {
    let first = a[columnState];
    let second = b[columnState];
    if (columnState === 'orbital_period') {
      first = Number(first);
      second = Number(second);
    }
    const NumberComparation = -1;
    switch (sort) {
    case 'ASC':
      return first > second ? 1 : NumberComparation;
    case 'DESC':
      return first < second ? 1 : NumberComparation;
    default:
      return 0;
    }
  });

  const filtroEApi = {
    sortPlanets,
    sort,
    setSort,
    columnState,
    setColumnState,
    dataFilt,
    setDataFilt,
    selectColumns,
    setSelectColumns,
    filters,
    setFilters,
    data,
    setData,
    column,
    setColumn,
    comparison,
    setComparison,
    value,
    setValue,
    handleChange,
    handleClick,
    handleColumns };
  return (
    <filterContext.Provider
      value={ filtroEApi }
    >
      {children}
    </filterContext.Provider>
  );
}

FilterProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FilterProvider;

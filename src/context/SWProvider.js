import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import SWContext from './SWContext';
import planetsAPI from '../services';
import { handleOrder } from '../helpers';

function SWProvider({ children }) {
  const [data, setData] = useState([]);

  const [arrayFiltered, setArrayFiltered] = useState([]);

  const [optionColumns, setoptionColumns] = useState([
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ]);

  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
    order: { column: 'name', sort: 'ASC' },
  });

  useEffect(() => {
    planetsAPI().then((result) => {
      setData(result);
      setArrayFiltered(handleOrder(result, filters.order));
    });
  }, [filters.order]);

  const changeByNameFilter = ({ target: { name, value } }) => {
    setFilters({
      ...filters,
      filterByName: { [name]: value },
    });
    setArrayFiltered(data.filter((item) => (
      item.name.includes(value))));
  };

  const addOrderFilter = (obj) => {
    setFilters((prev) => ({
      ...prev,
      order: obj,
    }));
    setArrayFiltered(handleOrder(arrayFiltered, obj));
  };

  const removeComparisonFilter = (column) => {
    setoptionColumns([column, ...optionColumns]);
    setFilters((prev) => ({
      ...prev,
      filterByNumericValues: prev.filterByNumericValues
        .filter((item) => item.column !== column),
    }));
  };

  const addComparisonFilter = ({ comparison, column, value }) => {
    setFilters({
      ...filters,
      filterByNumericValues: [
        ...filters.filterByNumericValues,
        { comparison, column, value },
      ],
    });
    setoptionColumns(optionColumns.filter((option) => option !== column));
  };

  useEffect(() => {
    if (filters.filterByNumericValues.length !== 0) {
      const index = filters.filterByNumericValues.length - 1;
      const { comparison, column, value } = filters.filterByNumericValues[index];
      return setArrayFiltered(data.filter((item) => {
        switch (comparison) {
        case 'maior que':
          return Number(item[column]) > Number(value);
        case 'menor que':
          return Number(item[column]) < Number(value);
        case 'igual a':
          return Number(item[column]) === Number(value);
        default: return item;
        }
      }));
    }
    return setArrayFiltered(data);
  }, [data, filters.filterByNumericValues]);

  return (
    <SWContext.Provider
      value={ {
        changeByNameFilter,
        arrayFiltered,
        optionColumns,
        addComparisonFilter,
        filters,
        removeComparisonFilter,
        addOrderFilter,
        data } }
    >
      {children}
    </SWContext.Provider>
  );
}

SWProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default SWProvider;

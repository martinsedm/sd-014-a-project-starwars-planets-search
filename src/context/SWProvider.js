import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import SWContext from './SWContext';
import planetsAPI from '../services';
import makeTheaderArray from '../helpers';

function SWProvider({ children }) {
  const [data, setData] = useState([]);

  const [info, setInfo] = useState({
    tHead: [],
    arrayFiltered: [],
    infoIsLoaded: false,
    optionCollumns: ['population', 'orbital_period',
      'diameter', 'rotation_period', 'surface_water'],
  });

  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  });

  const changeByNameFilter = ({ target: { name, value } }) => {
    setFilters({
      ...filters,
      filterByName: { [name]: value },
    });
  };

  const removeFilter = (column) => {
    setInfo((prev) => ({
      ...prev,
      optionCollumns: [column, ...prev.optionCollumns],
    }));
    setFilters((prev) => ({
      ...prev,
      filterByNumericValues: prev.filterByNumericValues
        .filter((item) => item.column !== column),
    }));
  };

  const changeNumericValues = ({ comparison, column, value }) => {
    setFilters({
      ...filters,
      filterByNumericValues: [
        ...filters.filterByNumericValues,
        { comparison, column, value },
      ],
    });
    console.log(comparison, column, value);
    setInfo((prev) => ({
      ...prev,
      optionCollumns: prev.optionCollumns
        .filter((option) => option !== column),
    }));
  };

  useEffect(() => {
    setInfo((prev) => ({
      ...prev,
      arrayFiltered: data.filter((item) => (
        item.name.includes(filters.filterByName.name))),
    }));
  }, [data, filters.filterByName]);

  useEffect(() => {
    if (filters.filterByNumericValues.length !== 0) {
      const index = filters.filterByNumericValues.length - 1;
      const { comparison, column, value } = filters.filterByNumericValues[index];
      return setInfo((prev) => ({
        ...prev,
        arrayFiltered: data.filter((item) => {
          switch (comparison) {
          case 'maior que':
            return Number(item[column]) > Number(value);
          case 'menor que':
            return Number(item[column]) < Number(value);
          case 'igual a':
            return Number(item[column]) === Number(value);
          default: return item;
          }
        }),
      }));
    }
    return setInfo((prev) => ({
      ...prev,
      arrayFiltered: data,
    }));
  }, [data, filters.filterByNumericValues]);

  useEffect(() => {
    planetsAPI().then((result) => {
      setData(result);
      setInfo((prev) => ({
        ...prev,
        arrayFiltered: result,
        infoIsLoaded: true,
        tHead: makeTheaderArray(result),
      }));
    });
  }, []);

  return (
    <SWContext.Provider
      value={ {
        changeByNameFilter,
        info,
        changeNumericValues,
        filters,
        removeFilter } }
    >
      {children}
    </SWContext.Provider>
  );
}

SWProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default SWProvider;

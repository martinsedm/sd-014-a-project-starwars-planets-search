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
  });

  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [
      {
        column: 'population',
        comparison: '',
        value: 0,
      },
    ],
  });

  const changeByNameFilter = ({ target: { name, value } }) => {
    setFilters({
      ...filters,
      filterByName: {
        ...filters.filterByName,
        [name]: value,
      },
    });
  };

  const changeNumericValues = (obj) => {
    setFilters({
      ...filters,
      filterByNumericValues: [obj.filterByNumericValues],
    });
  };

  useEffect(() => {
    setInfo((prev) => ({
      ...prev,
      arrayFiltered: data.filter((item) => (
        item.name.includes(filters.filterByName.name))),
    }));
  }, [data, filters.filterByName]);

  useEffect(() => {
    const [{ comparison, column, value }] = filters.filterByNumericValues;
    setInfo((prev) => ({
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
  }, [data, filters.filterByNumericValues]);

  useEffect(() => {
    planetsAPI().then((result) => {
      setData(result);
      setInfo({
        arrayFiltered: result,
        infoIsLoaded: true,
        tHead: makeTheaderArray(result),
      });
    });
  }, []);

  return (
    <SWContext.Provider
      value={ {
        changeByNameFilter,
        info,
        changeNumericValues,
        filters } }
    >
      {children}
    </SWContext.Provider>
  );
}

SWProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default SWProvider;

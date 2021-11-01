import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import myContext from './myContext';

export default function Provider({ children }) {
  const [data, setData] = useState([{}]);
  const API = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const fetchApi = async () => {
    const response = await fetch(API);
    const responseJSON = await response.json();
    const { results } = responseJSON;
    setData(results);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const [filters, setFilters] = useState({
    filtersByName: {
      name: '',
    },
    filterByNumericValues: [
      {
        column: '',
        comparison: ' ',
        value: '0',
      },
    ],
  });

  const changeFilters = (type, value) => {
    setFilters({
      ...filters,
      [type]: value,
    });
  };
  const changeFiltersNumber = (type, value) => {
    setFilters({
      ...filters,
      [type]: [...filters[type], value],
    });
  };
  const filterData = () => {
    const { name } = filters.filtersByName;
    const { filterByNumericValues } = filters;
    let filtered = [{}];
    if (data.length > 1) {
      filtered = data.filter((planet) => planet.name.includes(name));
      filterByNumericValues.map(({ column, comparison, value }) => {
        filtered = filtered.filter((plnt) => {
          const compare = Number(plnt[column]);
          const valor = Number(value);
          if (comparison === 'maior que') return compare > valor;
          if (comparison === 'menor que') return compare < valor;
          if (comparison === 'igual a') return compare === valor;
          return true;
        });
        return filtered;
      });
    }
    return filtered;
  };

  const removeFilter = (idx) => {
    const { filterByNumericValues } = filters;
    const newFilter = [...filterByNumericValues];
    newFilter.splice(idx, 1);
    setFilters({
      ...filters,
      filterByNumericValues: [...newFilter],
    });
  };

  const context = {
    data: filterData(),
    filters,
    filterFunc: { changeFilters, changeFiltersNumber, removeFilter },
  };
  return (
    <myContext.Provider value={ context }>
      {children}
    </myContext.Provider>

  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

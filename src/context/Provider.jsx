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
    const filtered = [...results];
    setData(filtered);
  };
  const [filterOrder, setFilterOrder] = useState(false);
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
    order: { column: '', sort: '' },
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

  const changeOrder = (filtro) => {
    const { column, order } = filters.order;
    if (order === 'ASC') {
      filtro.sort((a, b) => a[column] - b[column]);
    } else {
      filtro.sort((a, b) => b[column] - a[column]);
    }
  };
  const initialFilter = (filtro) => {
    const UM_NEGATIVO = -1;
    filtro.sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      if (nameA < nameB) return UM_NEGATIVO;
      if (nameA < nameB) return 1;
      return 0;
    });
  };
  const filterData = () => {
    const { name } = filters.filtersByName;
    const { filterByNumericValues } = filters;
    let filtered = [{}];
    if (data.length > 1) {
      filtered = data.filter((planet) => planet.name.includes(name));
      initialFilter(filtered);
      // console.log(data);
      if (filterOrder) changeOrder(filtered);
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
    filterFunc: { changeFilters, changeFiltersNumber, removeFilter, setFilterOrder },
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

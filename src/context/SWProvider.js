import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import SWContext from './SWContext';
import { NUMERIC_CATEGORIES, INITIAL_FILTERS } from '../info';

function SWProvider({ children }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState();
  const [filteredData, setFilteredData] = useState([]);
  const [filters, setFilters] = useState(INITIAL_FILTERS);
  const [categories, setCategories] = useState(NUMERIC_CATEGORIES);
  const [sortMethod, setSortMethod] = useState('ASC');

  const ONE = 1;

  const sortCategoryASC = (type, newData) => {
    const { order: { column } } = filters;
    if (type === 'name') {
      return setFilteredData(newData.sort((a, b) => (
        (a[column] > b[column]) ? ONE : -ONE)));
    }
    return setFilteredData(newData.sort((a, b) => (
      (Number(a[column]) > Number(b[column])) ? ONE : -ONE)));
  };

  const sortCategoryDESC = (type, newData) => {
    const { order: { column } } = filters;
    if (type === 'name') {
      return setFilteredData(newData.sort((a, b) => (
        (a[column] < b[column]) ? ONE : -ONE)));
    }
    return setFilteredData(newData.sort((a, b) => (
      (Number(a[column]) < Number(b[column])) ? ONE : -ONE)));
  };

  const sortData = (newData) => {
    const { order: { sort, column } } = filters;
    if (sort === 'ASC') {
      if (column === 'name'
      || column === 'url'
      || column === 'climate'
      || column === 'terrain') {
        return sortCategoryASC('name', newData);
      }
      return sortCategoryASC('', newData);
    }
    if (column === 'name' || column === 'url') {
      return sortCategoryDESC('name', newData);
    }
    return sortCategoryDESC('', newData);
  };

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const newData = await (await fetch('https://swapi-trybe.herokuapp.com/api/planets/')).json();
      delete newData.residents;
      setData(newData.results);
      setFilteredData(newData.results);
      setIsLoading(false);
    } catch (error) {
      setErrorMsg(error);
    }
  };

  const filterData = () => {
    const { filterByNumericValues } = filters;
    let newData = data.filter((planet) => (
      (planet.name).toLowerCase()).includes(filters.filterByName));
    if (filterByNumericValues.length > 0) {
      filterByNumericValues.forEach(({ column, comparison, value }) => {
        switch (comparison) {
        case 'maior que':
          newData = newData.filter((planet) => Number(planet[column])
          > Number(value));
          break;
        case 'menor que':
          newData = newData.filter((planet) => Number(planet[column])
          < Number(value));
          break;
        case 'igual a':
          newData = newData.filter((planet) => Number(planet[column])
          === Number(value));
          break;
        default:
          break;
        }
      });
    }
    sortData(newData);
  };

  const resetFilters = () => {
    setFilters(INITIAL_FILTERS);
    setCategories(NUMERIC_CATEGORIES);
  };

  const updateCategories = () => {
    let updatedCategories = NUMERIC_CATEGORIES;
    const { filterByNumericValues } = filters;
    if (filterByNumericValues.length > 0) {
      filterByNumericValues.forEach(({ column }) => {
        updatedCategories = updatedCategories.filter((cat) => cat !== column);
      });
    }
    setCategories(updatedCategories);
  };

  useEffect(() => {
    filterData();
    updateCategories();
  }, [filters]);

  return (
    <SWContext.Provider
      value={ {
        filteredData,
        isLoading,
        fetchData,
        setFilters,
        filters,
        categories,
        sortMethod,
        setSortMethod,
        sortData,
        errorMsg,
        resetFilters,
      } }
    >
      {children}
    </SWContext.Provider>
  );
}

SWProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SWProvider;

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import SWContext from './SWContext';
import { NUMERIC_CATEGORIES, INITIAL_FILTERS } from '../info';

function SWProvider({ children }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [filters, setFilters] = useState(INITIAL_FILTERS);
  const [name, setName] = useState('');
  const [categories, setCategories] = useState(NUMERIC_CATEGORIES);

  const sortData = () => {
    const ONE = 1;
    const { order: { sort, column } } = filters;

    if (sort === 'ASC') {
      filteredData.sort((a, b) => ((a[column] > b[column]) ? ONE : -ONE));
      console.log(`ASC sorting, category name: ${column}`);
    } else {
      console.log(`DESC sorting, category name: ${column}`);
    }
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
      console.log(errorMsg);
    }
  };

  useEffect(() => {
    setFilters({ ...filters, filterByName: name.toLowerCase() });
  }, [name]);

  const filterData = () => {
    let newData = data.filter((planet) => (
      (planet.name).toLowerCase()).includes(filters.filterByName));
    if (filters.filterByNumericValues.length > 0) {
      filters.filterByNumericValues.forEach((filter) => {
        switch (filter.comparison) {
        case 'maior que':
          newData = newData.filter((planet) => Number(planet[filter.column])
          > Number(filter.value));
          break;
        case 'menor que':
          newData = newData.filter((planet) => Number(planet[filter.column])
          < Number(filter.value));
          break;
        case 'igual a':
          newData = newData.filter((planet) => Number(planet[filter.column])
          === Number(filter.value));
          break;
        default:
          break;
        }
      });
    }
    setFilteredData(newData);
  };

  const filterCategories = () => {
    const numericFilter = filters.filterByNumericValues;
    if (filters.filterByNumericValues.length > 0) {
      setCategories(categories.filter((
        (cat) => cat !== numericFilter[numericFilter.length - 1].column)));
    }
  };

  useEffect(() => {
    filterData();
    filterCategories();
    sortData();
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
        name,
        setName,
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

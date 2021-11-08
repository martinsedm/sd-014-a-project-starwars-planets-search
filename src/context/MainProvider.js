import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MainContext from './MainContext';
import getPlanetsAPI from '../API/starwarsPlanetAPI';

function MainProvider({ children }) {
  const [allPlanets, setAllPlanets] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [

    ],
  });
  const [handlefilter, setHandlefilter] = useState([]);
  const [columnFilters, setColumnFilters] = useState(['population', 'orbital_period',
    'diameter', 'rotation_period', 'surface_water']);

  const removeColumnFilter = async ({ column }) => {
    const newArrayFilters = columnFilters.filter((option) => option !== column);
    setColumnFilters(newArrayFilters);
  };

  const funcfetch = async () => {
    const { results } = await getPlanetsAPI();
    setAllPlanets(results);
  };

  const setListFiltered = () => {
    let filter = handlefilter.length > 0 ? handlefilter : allPlanets;
    // console.log(filters.filterByNumericValues.length);
    // console.log(filter);
    filters.filterByNumericValues.forEach(({ column, comparison, value }) => {
      filter = filter
        .filter((planeta) => {
          if (comparison === 'maior que') {
            // console.log(Number(planeta[column]) > Number(value));
            return Number(planeta[column]) > Number(value);
          }
          if (comparison === 'menor que') {
            // console.log(Number(planeta[column]));
            // console.log(value);
            // console.log(Number(planeta[column]) < Number(value));
            return Number(planeta[column]) < Number(value);
          }
          return Number(planeta[column]) === Number(value);
        });
      // console.log(filter);
    });
    return filter;
  };

  const removeFilter = (column) => {
    const newFilterUsingColumn = filters.filterByNumericValues
      .filter((planeta) => planeta.column !== column);
    setFilters({
      ...filters,
      filterByNumericValues: [
        ...newFilterUsingColumn],
    });
  };

  const enviar = {
    funcfetch,
    allPlanets,
    setAllPlanets,
    filters,
    setFilters,
    handlefilter,
    columnFilters,
    setColumnFilters,
    setHandlefilter,
    setListFiltered,
    removeFilter,
    removeColumnFilter,
  };

  return (
    <MainContext.Provider value={ enviar }>
      { children }
    </MainContext.Provider>
  );
}

MainProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default MainProvider;

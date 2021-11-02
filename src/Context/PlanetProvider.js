import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { fetchPlanets, checkIfHasToSort } from '../helper';

export const PlanetState = createContext();

export function PlanetProvider({ children }) {
  const [data, setData] = useState([]);
  const [planetsToRender, setPlanetsToRender] = useState([]);
  const [filter, setFilter] = useState({
    filters: {
      filterByName: {
        name: '',
      },
      filterByNumericValues: [],
      sort: {
        column: '',
        sort: '',
      },
    },
  });

  const componentDidMount = async () => {
    const planets = await fetchPlanets();
    setData(planets);
    setPlanetsToRender(planets);
  };

  useEffect(() => {
    componentDidMount();
  }, []);

  useEffect(() => {
    const filterText = filter.filters.filterByName.name; // string
    const numericFilterList = filter.filters.filterByNumericValues; // array
    const sortOrder = filter.filters.sort; // object
    const hasToSort = sortOrder.sort !== ''; // boolean

    const filteredListByText = data.filter(({ name }) => (
      name.includes(filterText)
    ));

    const filteredPlanetListByNumberAndText = (

      filteredListByText.reduce((acc, planet) => {
        let attendToFilters = false;

        numericFilterList.forEach((filterOption) => {
          const { column, comparison, value } = filterOption;
          switch (comparison) {
          case 'maior que':
            attendToFilters = Number(planet[column]) > Number(value);
            break;
          case 'menor que':
            attendToFilters = Number(planet[column]) < Number(value);
            break;
          case 'igual a':
            attendToFilters = Number(planet[column]) === Number(value);
            break;
          default:
          }
        });

        if (attendToFilters) acc.push(planet);
        return acc;
      }, [])

    );

    if (numericFilterList.length !== 0) {
      setPlanetsToRender(
        checkIfHasToSort(hasToSort, filteredPlanetListByNumberAndText, sortOrder),
      );
      return;
    }

    setPlanetsToRender(
      checkIfHasToSort(hasToSort, filteredListByText, sortOrder),
    );
  }, [filter, data]);

  const applyTextFilter = ({ target: { value } }) => {
    setFilter((prev) => ({
      ...prev,
      filters: {
        ...prev.filters,
        filterByName: {
          ...prev.filters.filterByName,
          name: value,
        },
      },
    }));
  };

  const applyNumericFilter = (filterObject) => {
    setFilter((prev) => ({
      ...prev,
      filters: {
        ...prev.filters,
        filterByNumericValues: [
          ...prev.filters.filterByNumericValues,
          filterObject,
        ],
      },
    }));
  };

  const removeFilter = ({ comparison }) => {
    const filterNumericList = filter.filters.filterByNumericValues; // array

    const filteredNumericFilterList = filterNumericList
      .reduce((acc, filterToRemove) => {
        if (filterToRemove.comparison === comparison) return acc;
        acc.push(filterToRemove);
        return acc;
      }, []);

    setFilter((prev) => ({
      ...prev,
      filters: {
        ...prev.filters,
        filterByNumericValues: filteredNumericFilterList,
      },
    }));
  };

  const applySortFilter = (sortParams) => {
    setFilter((prev) => ({
      ...prev,
      filters: {
        ...prev.filters,
        sort: sortParams,
      },
    }));
  };

  const valuesAndMethods = {
    values: {
      filter,
      planetsToRender,
    },
    methods: {
      applyTextFilter,
      applyNumericFilter,
      applySortFilter,
      removeFilter,
    },
  };

  return (
    <PlanetState.Provider value={ valuesAndMethods }>
      {children}
    </PlanetState.Provider>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetProvider;

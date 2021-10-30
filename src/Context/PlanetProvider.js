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
    const filterNumberList = filter.filters.filterByNumericValues; // array
    const filterSort = filter.filters.sort; // object
    const haveToSort = filterSort.sort !== ''; // boolean

    const filteredPlanetListByText = data.filter(({ name }) => (
      name.includes(filterText)
    ));

    const filteredPlanetListByNumberAndText = filteredPlanetListByText
      .reduce((acc, planet) => {
        let attendToFilters = false;

        filterNumberList.forEach((filterOption) => {
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
      }, []);

    if (filterNumberList.length !== 0) {
      setPlanetsToRender(
        checkIfHasToSort(haveToSort, filteredPlanetListByNumberAndText, filterSort),
      );
      return;
    }

    setPlanetsToRender(
      checkIfHasToSort(haveToSort, filteredPlanetListByText, filterSort),
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
    const filterNumberList = filter.filters.filterByNumericValues; // array

    const filterNumerListWithoutTarget = filterNumberList
      .reduce((acc, filterToRemove) => {
        if (filterToRemove.comparison === comparison) return acc;
        acc.push(filterToRemove);
        return acc;
      }, []);

    setFilter((prev) => ({
      ...prev,
      filters: {
        ...prev.filters,
        filterByNumericValues: filterNumerListWithoutTarget,
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

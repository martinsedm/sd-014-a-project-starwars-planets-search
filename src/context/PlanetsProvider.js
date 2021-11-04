import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import planetFetcher from '../PlanetsAPI';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [filters, setFilter] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [{ column: '', comparison: '', value: 0 }],
    filtersUsed: [],
  });

  useEffect(() => {
    planetFetcher().then((result) => setData(result));
  }, []);

  const getNameFilter = ({ target }) => {
    setFilter({
      ...filters,
      filterByName: {
        name: target.value,
      },
    });
  };

  const getValueFilter = (column, comparison, value) => {
    setFilter({
      ...filters,
      filterByNumericValues:
      [...filters.filterByNumericValues, { column, comparison, value }],
      filtersUsed: [...filters.filtersUsed, column],
    });
  };

  const getFilterRemoval = (index) => {
    const { filterByNumericValues } = filters;
    const newFilterList = filterByNumericValues
      .filter((_elem, ind) => parseInt(ind, 10) !== parseInt(index, 10));

    setFilter({
      ...filters,
      filterByNumericValues: newFilterList,
    });
  };

  return (
    <main>
      <PlanetsContext.Provider
        value={ { data, filters, getNameFilter, getValueFilter, getFilterRemoval } }
      >
        {children}
      </PlanetsContext.Provider>
    </main>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;

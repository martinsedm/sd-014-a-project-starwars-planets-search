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
    order: { column: 'name', sort: 'ASC' },
  });

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

  const sortData = () => {
    const { column, sort } = filters.order;
    const dataMap = data.map((planet) => planet);
    const sortedData = dataMap.sort((a, b) => {
      const parseColumnA = Number
        .isNaN(parseFloat(a[column])) ? a[column] : parseFloat(a[column]);
      const parseColumnB = Number
        .isNaN(parseFloat(b[column])) ? b[column] : parseFloat(b[column]);
        // ^^^^ if any of the values here are numbers when parsed, then they'll stay parsed
      const INVERT = -1;
      const PROCEED = 1;
      switch (sort) {
      case 'ASC':
        // return a[column] > b[column] ? PROCEED : INVERT;
        return parseColumnA > parseColumnB ? PROCEED : INVERT;
      default:
        // return a[column] > b[column] ? INVERT : PROCEED;
        return parseColumnA > parseColumnB ? INVERT : PROCEED;
      }
    });
    setData(sortedData);
  };

  const getFilterOrder = (column, sort) => {
    setFilter({
      ...filters,
      order: { column, sort },
    });
  };

  useEffect(() => {
    sortData();
  }, [filters.order]);
  // AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA

  useEffect(() => {
    planetFetcher().then((result) => setData(result));
  }, []);

  return (
    <main>
      <PlanetsContext.Provider
        value={ {
          data,
          filters,
          getNameFilter,
          getValueFilter,
          getFilterRemoval,
          getFilterOrder,
          sortData,
        } }
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

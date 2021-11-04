import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import planetFetcher from '../PlanetsAPI';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [filters, setFilter] = useState({
    filterByName: { name: '' },
    filterByNumericValues: { column: '', comparison: '', value: 0 }, // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
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
      filterByNumericValues: { column, comparison, value },
    });
  };

  return (
    <main>
      <PlanetsContext.Provider value={ { data, filters, getNameFilter, getValueFilter } }>
        {children}
      </PlanetsContext.Provider>
    </main>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;

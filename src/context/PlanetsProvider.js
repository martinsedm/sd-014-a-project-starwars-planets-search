import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import planetFetcher from '../PlanetsAPI';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [filters, setFilter] = useState({ filterByName: { name: '' } });

  useEffect(() => {
    planetFetcher().then((result) => setData(result));
  }, []);

  const getFilter = (event) => {
    const { target } = event;
    // setFilter(target.value);
    setFilter({
      ...filters,
      filterByName: {
        name: target.value,
      },
    });
  };

  return (
    <main>
      <PlanetsContext.Provider value={ { data, filter: filters, getFilter } }>
        {children}
      </PlanetsContext.Provider>
    </main>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;

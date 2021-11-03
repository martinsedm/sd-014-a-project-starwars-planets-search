import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarwarsSearch from './StarwarsContext';
import PlanetsKeyDeleted from '../service/fetchApi';

function StarwarsProvider({ children }) {
  const [filters, setFilters] = useState({
    filters: {
      filterByName: {
        name: '',
      },
      filterByNumericValues: [],
      order: {
        column: 'name',
        sort: 'ASC',
      },
    },
  });
  const [planetsFiltred, setPlanetsFiltred] = useState([]);

  useEffect(() => {
    PlanetsKeyDeleted('residents')
      .then((response) => setPlanetsFiltred(response));
  }, []);

  const contextValue = {
    filters,
    setFilters,
    planetsFiltred,
    setPlanetsFiltred,
  };
  return (
    <StarwarsSearch.Provider value={ contextValue }>
      {children}
    </StarwarsSearch.Provider>
  );
}

StarwarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarwarsProvider;

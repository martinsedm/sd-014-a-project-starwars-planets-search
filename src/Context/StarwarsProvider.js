import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetsKeyDeleted from '../service/fetchApi';
import StarwarsSearch from './StarwarsContext';

function StarwarsProvider({ children }) {
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [
    ],
    order: {
      column: 'name',
      sort: 'ASC',
    },
  });
  const [planetsFiltred, setPlanetsFiltred] = useState([]);
  const [planetsResponseApi, setPlanetsResponse] = useState([]);

  useEffect(() => {
    PlanetsKeyDeleted('residents')
      .then((response) => setPlanetsResponse(response));
  }, []);

  const contextValue = {
    filters,
    setFilters,
    planetsFiltred,
    setPlanetsFiltred,
    planetsResponseApi,
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

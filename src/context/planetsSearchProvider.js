import React, { useState } from 'react';
import PropTypes from 'prop-types';

import planetSearchContext from './planetsSearchContext';
import getPlanetsList from '../services/planetsSearchAPI';
import useFilters from '../hooks/useFilters';

function PlanetsSearchProvider({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const filters = useFilters();

  const toggleLoading = () => {
    setLoading((prevState) => !prevState);
  };

  const fetchData = async () => {
    const planets = await getPlanetsList();
    setData(planets);
    toggleLoading();
  };

  return (
    <planetSearchContext.Provider value={ { data, loading, fetchData, filters } }>
      {children}
    </planetSearchContext.Provider>
  );
}

PlanetsSearchProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
};

export default PlanetsSearchProvider;

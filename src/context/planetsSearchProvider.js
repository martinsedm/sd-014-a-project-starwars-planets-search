import React, { useState } from 'react';
import PropTypes from 'prop-types';

import planetSearchContext from './planetsSearchContext';
import getPlanetsList from '../services/planetsSearchAPI';
import useFilters from '../hooks/useFilters';

function PlanetsSearchProvider({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useFilters();

  const toggleLoading = () => {
    setLoading((prevState) => !prevState);
  };

  const fetchData = async () => {
    const planets = await getPlanetsList();
    setData(planets);
    toggleLoading();
  };

  return (
    <planetSearchContext.Provider
      value={ { data, loading, fetchData, filter, setFilter } }
    >
      {children}
    </planetSearchContext.Provider>
  );
}

PlanetsSearchProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
};

export default PlanetsSearchProvider;

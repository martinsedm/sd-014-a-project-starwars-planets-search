import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    const fetchData = async () => {
      const planets = await getPlanetsList();
      setData(planets);
      toggleLoading();
    };
    fetchData();
  }, []);

  return (
    <planetSearchContext.Provider
      value={ { data, loading, filter, setFilter } }
    >
      {children}
    </planetSearchContext.Provider>
  );
}

PlanetsSearchProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
};

export default PlanetsSearchProvider;

import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import getPlanets from '../services/getPlanets';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [filteredByName, setFilter] = useState({
    filters: {
      filterByName: {
        name: '',
      },
    },
  });

  const fetchPlanets = async () => {
    setisLoading(true);
    const { results } = await getPlanets();
    setPlanets(results);
    setisLoading(false);
  };

  useEffect(() => {
    fetchPlanets();
  }, []);

  return (
    <PlanetsContext.Provider value={ { planets, isLoading, filteredByName, setFilter } }>
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: propTypes.node.isRequired,
};

export default PlanetsProvider;

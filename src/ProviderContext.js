import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import myContext from './MyContext/MyContext';
import planetsAPI from './Services/planetsAPI';

function ProviderContext({ children }) {
  const [planets, setPlanets] = useState();
  const [loading, setLoading] = useState(true);

  const stateFilter = {
    filters: {
      filterByName: {
        name: '',
      },
    },
  };

  const [filtros, setFiltros] = useState(stateFilter);

  const fetchPlanets = async () => {
    const apiData = await planetsAPI();
    setPlanets(apiData.results);
    setLoading(false);
  };

  useEffect(() => {
    fetchPlanets();
  }, []);

  return (
    <myContext.Provider value={ { planets, loading, filtros, setFiltros } }>
      { children }
    </myContext.Provider>
  );
}

ProviderContext.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProviderContext;

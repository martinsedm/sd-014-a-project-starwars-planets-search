import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import myContext from './MyContext/MyContext';
import planetsAPI from './Services/planetsAPI';

const stateFilter = {
  filters: {
    filterByName: {
      name: '',
    },
    filterByNumericValues: [
      {
        column: '',
        comparison: '',
        value: 0,
      },
    ],
  },
};

function ProviderContext({ children }) {
  const [planets, setPlanets] = useState();
  const [loading, setLoading] = useState(true);
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

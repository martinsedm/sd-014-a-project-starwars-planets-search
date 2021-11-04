import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import AppContext from './MyContext';

import apir from '../services/ApiRequisicao';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const contextValue = {
    data,
    setData,
    loading,
    setLoading,
  };

  useEffect(() => {
    async function fetchData() {
      const planetasStarWars = await apir();
      setData(planetasStarWars);
      setLoading(true);
    }
    fetchData();
  }, []);

  return (
    <AppContext.Provider value={ contextValue }>
      {children}
    </AppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Provider;

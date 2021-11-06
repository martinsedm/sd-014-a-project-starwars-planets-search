import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import AppContext from './MyContext';

import apir from '../services/ApiRequisicao';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filterNamePlanet, setFilterNamePlanet] = useState('');
  const [filterByName, setFilterByName] = useState([{
    filterByName: {
      name: '',
    },
  }]);

  useEffect(() => {
    async function fetchData() {
      const { results } = await apir();
      setData(results);
      setLoading(true);
    }
    fetchData();
  }, []);

  const filterNames = (plan) => {
    const filterName = plan.filter((n) => n.name.includes(filterNamePlanet));
    return filterName;
  };

  useEffect(() => {
    setFilterByName({
      filterByName: {
        name: filterNamePlanet,
      },
    });
  }, [filterNamePlanet]);

  const contextValue = {
    data,
    setData,
    loading,
    setLoading,
    filterByName,
    setFilterByName,
    filterNamePlanet,
    setFilterNamePlanet,
    filterNames,
  };

  return (
    <AppContext.Provider value={ contextValue }>
      {children}
    </AppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.any,
}.isRequired;

export default Provider;

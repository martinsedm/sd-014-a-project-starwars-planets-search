import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import planetsContext from './planetsContext';
import planetsApi from '../services/dataAPI';

function Provider({ children }) {
  const [dataPlanets, setDataPlanets] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [filter, setFilter] = useState({
    filterByName: { name: '' },
  });

  useEffect(() => {
    setLoading(true);
    planetsApi().then((dataa) => {
      const planetsResults = dataa.results.map((planet) => {
        delete planet.residents;
        return planet;
      });
      setDataPlanets(planetsResults);
      setLoading(false);
    });
  }, []);
  // console.log(dataPlanets);
  // console.log(isLoading);

  const changeNameFilter = (name) => {
    setFilter({
      ...filter,
      filterByName: {
        ...filter.filterByName,
        name,
      },
    });
  };

  const context = {
    dataPlanets,
    isLoading,
    filter,
    changeNameFilter,
  };

  return (
    <planetsContext.Provider value={ context }>
      { children }
    </planetsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;

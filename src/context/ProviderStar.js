import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ContextStar from './ContextStar';
import requisitionPlanets from '../services/api';

function ProviderStar({ children }) {
  const [planets, setPlanets] = useState([]);
  const [filters, setFilters] = useState({ filterByName: { name: '' } });

  async function InfoPlanetsAPI() {
    const saveInfos = await requisitionPlanets();
    setPlanets(saveInfos);
  }

  const contextValue = {
    InfoPlanetsAPI,
    planets,
    setFilters,
    filters,
  };

  return (
    <ContextStar.Provider value={ contextValue }>
      { children }
    </ContextStar.Provider>
  );
}

ProviderStar.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProviderStar;

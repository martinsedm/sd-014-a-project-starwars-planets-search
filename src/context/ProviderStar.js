import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ContextStar from './ContextStar';
import requisitionPlanets from '../services/api';

function ProviderStar({ children }) {
  const [planets, setPlanets] = useState([]);

  async function InfoPlanetsAPI() {
    const saveInfos = await requisitionPlanets();
    setPlanets(saveInfos);
  }

  return (
    <ContextStar.Provider value={ { InfoPlanetsAPI, planets } }>
      { children }
    </ContextStar.Provider>
  );
}

ProviderStar.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProviderStar;

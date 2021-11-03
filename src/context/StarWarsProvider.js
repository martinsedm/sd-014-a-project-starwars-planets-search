import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import PlanetsContext from './PlanetsContext';

import { getPlanetList } from '../services/planetsAPI';

function Provider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    getPlanetList()
      .then((items) => {
        setData(items.results);
      });
  }, []);

  const context = {
    data,
  };
  return (
    <PlanetsContext.Provider value={ context }>
      {children}
    </PlanetsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;

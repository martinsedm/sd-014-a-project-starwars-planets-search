import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import planetFetcher from '../PlanetsAPI';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  // setData(planetFetcher);
  useEffect(() => {
    // setData(planetFetcher);
    planetFetcher().then((result) => setData(result));
  }, []);

  return (
    <main>
      <PlanetsContext.Provider value={ { data } }>
        {children}
      </PlanetsContext.Provider>
    </main>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;

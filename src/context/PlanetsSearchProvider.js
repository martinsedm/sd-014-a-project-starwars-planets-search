import PropTypes from 'prop-types';
import React, { useState } from 'react';
import PlanetsSearchContext from './PlanetsSearchContext';

function PlanetsSearchProvider({ children }) {
  const [planets, setPlanets] = useState([]);

  return (
    <PlanetsSearchContext.Provider
      value={ {
        planets,
        setPlanets,
      } }
    >
      { children }
    </PlanetsSearchContext.Provider>
  );
}

PlanetsSearchProvider.propTypes = {
  children: PropTypes.arrayOf.isRequired,
};

export default PlanetsSearchProvider;

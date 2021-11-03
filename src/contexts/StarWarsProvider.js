import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StarsWarsContext from './StarWarsContext';

function StarsWarsProvider(props) {
  const [planetsRender, setPlanetsRender] = useState([]);
  const { children } = props;

  const context = {
    planetsRender,
    setPlanetsRender,
  };

  return (
    <StarsWarsContext.Provider value={ context }>
      { children }
    </StarsWarsContext.Provider>
  );
}

StarsWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarsWarsProvider;

import React from 'react';
import PropTypes from 'prop-types';
import myContext from './MyContext/MyContext';

function Provider({ children }) {
  return (
    <myContext.Provider>
      { children }
    </myContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;

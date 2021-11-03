import React, { useState } from 'react';
import PropTypes from 'prop-types';
import filterContext from './filterContext';

function FilterProvider(props) {
  const [name, setName] = useState('');
  const { children } = props;
  return (
    <filterContext.Provider
      value={
        { name, setName }
      }
    >
      {children}
    </filterContext.Provider>
  );
}

FilterProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default FilterProvider;

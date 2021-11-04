import React from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import useFetch from '../Hooks/useFetch';

const Provider = ({ children }) => {
  const [data, loaded] = useFetch();
  const contextValue = {
    data,
    loaded,
  };

  return (
    <Context.Provider value={ contextValue }>
      { children }
    </Context.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.shape({}).isRequired,
};

export default Provider;

import React from 'react';
import PropTypes from 'prop-types';
import StarwarsSearch from './StarwarsContext';

function StarwarsProvider({ children }) {
  // aqui cria os states com valores inciais
  const contextValue = {
    testes: 'olá',
  };
  return (
    <StarwarsSearch.Provider value={ contextValue }>
      {children}
    </StarwarsSearch.Provider>
  );
}

StarwarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarwarsProvider;

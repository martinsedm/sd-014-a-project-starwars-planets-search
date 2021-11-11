import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import fetchAPI from './fetchAPI';

export default function Provider({ children }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const resolvePromise = async () => {
      const response = await fetchAPI();
      setData(response);
    };
    resolvePromise();
  }, []);

  return (
    <Context.Provider value={ data }>{children}</Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.shape({}).isRequired,
};

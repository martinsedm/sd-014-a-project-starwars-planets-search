import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import Context from './Context';
import fetchAPI from '../services/API';

export default function Provider({ children }) {
  const [project, updateProject] = useState([]);
  const [isLoading, updateIsLoading] = useState(true);

  useEffect(() => {
    async function fetchA() {
      const { results } = await fetchAPI();
      results.forEach((a) => delete a.residents);
      updateProject(results);
      updateIsLoading(false);
      console.log(results);
    }
    fetchA();
  }, []);

  const valuesContext = {
    project,
    isLoading,
  };

  return (
    <Context.Provider value={ valuesContext }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};

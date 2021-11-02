import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import Context from './Context';
import fetchAPI from '../services/API';

export default function Provider({ children }) {
  const [project, updateProject] = useState([]);
  const [isLoading, updateIsLoading] = useState(true);
  const [searchText, setSearchText] = useState('');
  // const [filters, setFilters] = useState([]);

  useEffect(() => {
    async function fetchA() {
      const { results } = await fetchAPI();
      results.forEach((a) => delete a.residents);
      updateProject(results);
      updateIsLoading(false);
    }
    fetchA();
  }, []);

  // function getFilterName(value) {
  //   if (searchText === '') { return project; }
  //   console.log(project);
  //   const filtrados = project.filter((e) => e.name.toLowerCase().includes(filters.filterByName.name.toLowerCase()));
  //   setFilters({ filterByName: {
  //     name: filtrados,
  //   } });
  // }

  const valuesContext = {
    project,
    isLoading,
    searchText,
    setSearchText,
    // filters,
    // getFilterName,
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

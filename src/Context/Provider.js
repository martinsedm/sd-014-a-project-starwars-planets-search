import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import Context from './Context';
import fetchAPI from '../services/API';

export default function Provider({ children }) {
  const [project, updateProject] = useState([]);
  const [isLoading, updateIsLoading] = useState(true);
  const [searchText, setSearchText] = useState('');
  const [filters, setFilters] = useState([{
    filterByName: {
      name: '',
    } }]);

  useEffect(() => {
    async function fetchA() {
      const { results } = await fetchAPI();
      results.forEach((a) => delete a.residents);
      updateProject(results);
      updateIsLoading(false);
    }
    fetchA();
  }, []);

  const filterMap = (data) => {
    const filterName = data.filter((n) => n.name.toLowerCase()
      .includes(searchText.toLowerCase()));
    return filterName;
  };

  useEffect(() => {
    setFilters({
      filterByName: {
        name: searchText,
      },
    });
  }, [searchText]);

  const valuesContext = {
    project,
    isLoading,
    searchText,
    setSearchText,
    filters,
    filterMap,
  };

  return (
    <Context.Provider value={ valuesContext }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

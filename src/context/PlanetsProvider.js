import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import PlanetsContext from './PlanetsContext';

export default function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [filterByName, setFilterByName] = useState({ name: '' });
  const [filteredData, setFilteredData] = useState([]);

  // ## PLANETS API ##

  const fetchData = async () => {
    setIsLoading(true);
    const fetchApi = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const response = await fetchApi.json();
    const apiResults = response.results;
    setData(apiResults);
    setIsLoading(false);
    setFilteredData(apiResults);
  };

  // ## FILTER BY NAME ##

  const search = async () => {
    // setFilterByName({ name: e.target.value });
    const filterr = data.filter((a) => a.name
      .toLowerCase().includes(filterByName.name.toLowerCase()));
    setFilteredData(filterr);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // ### DELETE-ME PLEASE

  useEffect(() => {
    console.log(filteredData);
    console.log(filterByName);
  });

  // https://stackoverflow.com/questions/60209671/asynchronous-context-with-useeffect-in-react

  const exportState = {
    data,
    setData,
    isLoading,
    filterByName,
    setFilterByName,
    filteredData,
    search,
  };

  return (
    <PlanetsContext.Provider value={ exportState }>
      { children }
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

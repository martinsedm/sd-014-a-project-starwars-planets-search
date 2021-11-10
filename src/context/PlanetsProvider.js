import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import PlanetsContext from './PlanetsContext';

export default function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [filterByName, setFilterByName] = useState({ name: '' });
  const [filterByNumber, setFilterByNumber] = useState(0);
  const [filterByOption, setFilterByOption] = useState('population');
  const [filterByComparison, setFilterByComparison] = useState('maior que');
  const [filteredData, setFilteredData] = useState([]);
  const [clickButton, setClickButton] = useState(false);

  const [defaultFilterOptions, neverChangeIt] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);
  const [filterOptions, setFilterOptions] = useState(defaultFilterOptions);

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

  useEffect(() => {
    fetchData();
  }, []);

  // ## FILTER BY NAME ##

  useEffect(() => {
    const filterr = data.filter((a) => a.name
      .toLowerCase().includes(filterByName.name.toLowerCase()));
    setFilteredData(filterr);
  }, [filterByName, data]);

  // ## FILTER BY NUMERIC VALUES ##

  function filterByNumeric() {
    setFilterOptions(defaultFilterOptions.filter((e) => e !== filterByOption));
    setFilteredData((data).filter((a) => {
      if (filterByComparison === 'maior que') {
        return ((1 * a[filterByOption]) > (filterByNumber * 1));
      }
      if (filterByComparison === 'igual a') {
        return ((1 * a[filterByOption]) === (filterByNumber * 1));
      }
      if (filterByComparison === 'menor que') {
        return ((1 * a[filterByOption]) < (filterByNumber * 1));
      }
      return null;
    }));
  }

  // useEffect(() => {
  //   filterByNumeric();
  // }, [clickButton]);

  // ### DELETE ME PLEASE

  useEffect(() => {
    console.log(filteredData);
    console.log(filterByName);
    console.log(filterByNumber);
    console.log(filterByOption);
    console.log(filterByComparison);
    console.log(clickButton);
    console.log(filterOptions);
  });

  // https://stackoverflow.com/questions/60209671/asynchronous-context-with-useeffect-in-react

  const exportState = {
    data,
    setData,
    isLoading,
    filterByName,
    setFilterByName,
    filteredData,
    filterByNumber,
    setFilterByNumber,
    filterByOption,
    setFilterByOption,
    filterByComparison,
    setFilterByComparison,
    clickButton,
    setClickButton,
    filterByNumeric,
    filterOptions,
    setFilterOptions,
    neverChangeIt,
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

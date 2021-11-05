import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import { filterInit } from '../consts';

const StarWarsProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [newData, setNewData] = useState();
  const [planetsByFilter, setPlanetsByFilter] = useState(null);
  const [isFilter, setisFilter] = useState(false);
  const [filter, setFilter] = useState(filterInit);
  const [titles, setTitles] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const urlApi = 'https://swapi-trybe.herokuapp.com/api/planets/';
  useEffect(() => {
    async function fetchData() {
      const { results } = await fetch(urlApi).then((response) => response.json());
      setData(results);
      setNewData(results);
    }
    fetchData();
    setIsLoading(false);
  }, []);

  const filterByName = (value) => {
    if (value) {
      return setPlanetsByFilter(data.filter((planet) => planet
        .name.toLowerCase().includes(value.toLowerCase())));
    }
    return data;
  };

  useEffect(() => { // Obrigado Issac!!!
    const { filterByNumericValues } = filter;
    if (isFilter && filterByNumericValues[0] && newData !== []) {
      filterByNumericValues.reduce((acc, ele) => {
        const { comparison, value, column } = ele;
        switch (comparison) {
        case 'maior que':
          acc = newData.filter((planet) => Number(planet[column]) > Number(value));
          break;
        case 'menor que':
          acc = newData.filter((planet) => Number(planet[column]) < Number(value));
          console.log(acc, '< depois');
          break;
        case 'igual a':
          console.log(acc, '===');
          acc = newData.filter((planet) => Number(planet[column]) === Number(value));
          break;

        default:
          break;
        }
        return setNewData(acc);
      }, [newData]);
    }
    return () => setisFilter(false);
  }, [data, filter, isFilter, newData]);

  const valueDefault = {
    data,
    setData,
    titles,
    setTitles,
    filter,
    setFilter,
    filterByName,
    planetsByFilter,
    setPlanetsByFilter,
    newData,
    setNewData,
    isLoading,
    isFilter,
    setisFilter,
  };

  return (
    <StarWarsContext.Provider value={ valueDefault }>
      {children}
    </StarWarsContext.Provider>
  );
};

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarsProvider;

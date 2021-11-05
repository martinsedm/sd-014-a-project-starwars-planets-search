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

  // const setFiltersSelect = ({ column, comparison, value }) => {
  //   let algum = [];
  //   switch (comparison) {
  //   case 'maior que':
  //     algum = [...data.filter((planet) => Number(planet[column]) > Number(value))];
  //     break;
  //   case 'menor que':
  //     algum = [...data.filter((planet) => Number(planet[column]) < Number(value))];
  //     break;
  //   case 'igual a':
  //     algum = [...data.filter((planet) => Number(planet[column]) === Number(value))];
  //     break;
  //   default:
  //     algum = [...data];
  //     break;
  //   }
  //   return algum;
  // };

  useEffect(() => {
    const { filterByNumericValues } = filter;
    if (isFilter && filterByNumericValues[0] && newData !== []) {
      console.log(isFilter, 'isFilter');
      filterByNumericValues.reduce((acc, ele) => {
        const { comparison, value, column } = ele;
        switch (comparison) {
        case 'maior que':
          console.log(acc, '>');
          acc = newData.filter((planet) => Number(planet[column]) > Number(value));
          break;
        case 'menor que':
          console.log(acc, '< antes');
          acc = newData.filter((planet) => Number(planet[column]) < Number(value));
          console.log(acc, '< depois');
          break;
        case 'igual a':
          console.log(acc, '===');
          acc = newData.filter((planet) => Number(planet[column]) === Number(value));
          break;

        default:
          console.log('=((');
          break;
        }
        console.log(acc, 'acc');
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
    // setFiltersSelect,
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

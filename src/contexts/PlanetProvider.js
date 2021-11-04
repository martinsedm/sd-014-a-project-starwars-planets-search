import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';

export default function PlanetProvider({ children }) {
  const [planets, setPlanets] = useState([{}]);
  const [filters, setFilter] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  });

  const fetchPlanets = async () => {
    const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const data = await response.json();
    const { results } = data;
    results.forEach((element) => {
      delete element.residents;
    });
    console.log('fetched');
    setPlanets(results);
  };

  const filterPlanets = () => {
    let newArr = [...planets];
    if (filters.filterByNumericValues[0]) {
      const { filterByNumericValues } = filters;
      const {
        comparison,
        column,
        value } = filterByNumericValues[filterByNumericValues.length - 1];
      switch (comparison) {
      case 'menor que':
        newArr = planets.filter((planet) => Number(planet[column]) < Number(value));
        break;

      case 'igual a':
        newArr = planets.filter((planet) => Number(planet[column]) === Number(value));
        break;

      case 'maior que':
        newArr = planets.filter((planet) => Number(planet[column]) > Number(value));
        break;

      default:
        break;
      }
    }
    console.log(newArr);
    setPlanets([...newArr]);
  };

  return (
    <main>
      <PlanetContext.Provider
        value={ {
          planets,
          fetchPlanets,
          filters,
          setFilter,
          filterPlanets,
        } }
      >
        {children}
      </PlanetContext.Provider>
    </main>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import planetsAPI from '../services/planetsAPI';

function PlanetsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [
      {
        column: 'population',
        comparison: 'maior que',
        value: '',
      },
    ],
  }); // ideia do estado por RODAUM

  const getPlanets = async () => {
    const data = await planetsAPI();
    const { results } = data;
    // Exclusão dos residentes - Filipão
    const resultsMapped = results.map((result) => {
      delete result.residents;
      return result;
    });
    setPlanets(resultsMapped);
    setIsLoading(false);
  };

  // Filtragem do meu senhor, Rod.
  const namesFilter = () => {
    if (filters.filterByName.name) {
      return planets.filter(
        ({ name }) => name.toLowerCase().includes(filters.filterByName.name),
      );
    }
    return planets;
  };

  const numericValuesFilter = () => {
    const { column, comparison, value } = filters.filterByNumericValues[0];

    let newArr = [...planets];
    if (filters.filterByNumericValues) {
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
      // console.log(column);
    }
    // console.log(newArr);
    setPlanets([...newArr]);
  };

  const removeOption = () => {
    const { column } = filters.filterByNumericValues[0];
    console.log(column);

    const select = document.querySelector('#columnFilter');

    select.childNodes.forEach((option) => {
      if (option.innerHTML === column) {
        option.remove();
      }
    });
  };

  return (
    <PlanetsContext.Provider
      value={ {
        planets,
        getPlanets,
        isLoading,
        filters,
        setFilters,
        namesFilter,
        numericValuesFilter,
        removeOption,
      } }
    >
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;

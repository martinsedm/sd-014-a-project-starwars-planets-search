import React, { useContext, useEffect, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import TableRow from './TableRow';

function Table() {
  const {
    loading,
    planets,
    getPlanetsData,
    numberFilters,
    filters,
  } = useContext(StarWarsContext);
  const [planetsUpdated, setPlanetsUpdated] = useState(planets);

  useEffect(() => {
    setPlanetsUpdated(planets);
  }, [getPlanetsData, planets]);

  if (loading) return <p>Loading...</p>;

  const filterPlanets = () => {
    const newPlanets = [...planetsUpdated];
    const { filterByNumericValues } = numberFilters;
    const { filterByName } = filters;
    if (filterByName.name) {
      return planetsUpdated.filter(
        ({ name }) => name.toLowerCase().includes(filterByName.name),
      );
    }

    if (filterByNumericValues[0]) {
      return filterByNumericValues.reduce((accumulator, currentValue) => {
        const { comparison, column, value } = currentValue;
        switch (comparison) {
        case 'maior que':
          accumulator = planetsUpdated
            .filter((planet) => Number(planet[column]) > Number(value));
          break;

        case 'menor que':
          accumulator = planetsUpdated
            .filter((planet) => Number(planet[column]) < Number(value));
          break;

        case 'igual a':
          accumulator = planetsUpdated
            .filter((planet) => Number(planet[column]) === Number(value));
          break;

        default:
          break;
        }
        return accumulator;
      }, [planetsUpdated]);
    }
    return newPlanets;
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Rotation Period</th>
          <th>Orbital Period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Population</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>Url</th>
        </tr>
      </thead>
      <tbody>
        {filterPlanets()
          .map((planet, index) => <TableRow key={ index } planet={ planet } />)}
      </tbody>
    </table>
  );
}

export default Table;

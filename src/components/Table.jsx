import React, { useContext, useEffect, useState } from 'react';
import PlanetContext from '../contexts/PlanetContext';
import TableRow from './TableRow';

export default function Table() {
  const { planets, fetchPlanets, filters } = useContext(PlanetContext);
  const [planetState, setPlanetState] = useState(planets);

  useEffect(() => {
    fetchPlanets();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setPlanetState(planets);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchPlanets]);

  const filterPlanets = () => {
    const newArr = [...planetState];
    const { filterByNumericValues } = filters;
    if (filters.filterByName.name) {
      return planetState.filter(
        ({ name }) => name.toLowerCase().includes(filters.filterByName.name),
      );
    }
    if (filterByNumericValues[0]) {
      return filterByNumericValues.reduce((acc, cur) => {
        const {
          comparison,
          column,
          value } = cur;
        switch (comparison) {
        case 'menor que':
          acc = planetState.filter((planet) => Number(planet[column]) < Number(value));
          break;

        case 'igual a':
          acc = planetState.filter((planet) => Number(planet[column]) === Number(value));
          break;

        case 'maior que':
          acc = planetState.filter((planet) => Number(planet[column]) > Number(value));
          break;

        default:
          break;
        }
        return acc;
      }, [planetState]);
    }
    return newArr;
  };

  return (
    <table>
      <thead>
        <tr>
          {Object.keys(planets[0]).map((key) => (
            <th key={ key }>
              {' '}
              {key}
              {' '}
            </th>))}
        </tr>
      </thead>
      <tbody>
        <TableRow planets={ filterPlanets() } />
      </tbody>
    </table>
  );
}

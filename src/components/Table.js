import React, { useContext, useEffect } from 'react';
import PlanetsContext from '../context/PlanetsContext';

const TABLE_HEADERS = [
  'Name',
  'Rotation Period',
  'Orbital Period',
  'Diameter',
  'Climate',
  'Gravity',
  'Terrain',
  'Surface Water',
  'Population',
  'Films',
  'Created',
  'Edited',
  'URL',
];

function Table() {
  const { filters, getPlanets, planets } = useContext(PlanetsContext);
  const { filterByName, filterByNumericValues, order } = filters;

  useEffect(() => {
    getPlanets();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filterPlanetsByName = planets.filter((planet) => {
    if (filterByName.name) {
      return planet.name
        .toLowerCase()
        .includes(filterByName.name.toLowerCase());
      // make case insensitive
    }
    return true;
  });

  const filterPlanetsByNumericValues = filterPlanetsByName.filter((planet) => {
    if (filterByNumericValues.length > 0) {
      return filterByNumericValues.every((filter) => {
        const value = Number(planet[filter.column]);

        switch (filter.comparison) {
        case 'maior que':
          return value > Number(filter.value);
        case 'menor que':
          return value < Number(filter.value);
        case 'igual a':
          return value === Number(filter.value);
        default:
          return true;
        }
      });
    }
    return true;
  });

  const compareNumbers = (a, b, sort) => (sort === 'ASC' ? a - b : b - a);

  const compareStrings = (a, b, sort) => {
    const MIN_VALUE = -1;
    if (sort === 'ASC') {
      return a > b ? 1 : MIN_VALUE;
    }
    return a < b ? 1 : MIN_VALUE;
  };

  const orderPlanets = filterPlanetsByNumericValues.sort((a, b) => {
    const valueA = a[order.column];
    const valueB = b[order.column];

    if (
      order.column === 'rotation_period'
      || order.column === 'orbital_period'
      || order.column === 'diameter'
      || order.column === 'surface_water'
    ) {
      return compareNumbers(Number(valueA), Number(valueB), order.sort);
    }
    return compareStrings(valueA, valueB, order.sort);
  });

  return (
    <table>
      <thead>
        <tr>
          {TABLE_HEADERS.map((tableHeader) => (
            <th key={ tableHeader }>{tableHeader}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {orderPlanets.map((planet) => (
          <tr key={ planet.name }>
            <td data-testid="planet-name">{planet.name}</td>
            <td>{planet.rotation_period}</td>
            <td>{planet.orbital_period}</td>
            <td>{planet.diameter}</td>
            <td>{planet.climate}</td>
            <td>{planet.gravity}</td>
            <td>{planet.terrain}</td>
            <td>{planet.surface_water}</td>
            <td>{planet.population}</td>
            <td>{planet.films}</td>
            <td>{planet.created}</td>
            <td>{planet.edited}</td>
            <td>{planet.url}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;

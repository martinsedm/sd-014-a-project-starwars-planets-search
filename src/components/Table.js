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
  const { filterByName, filterByNumericValues } = filters;

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
        {filterPlanetsByNumericValues.map((planet) => (
          <tr key={ planet.name }>
            <td>{planet.name}</td>
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

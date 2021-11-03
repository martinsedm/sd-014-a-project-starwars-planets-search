import React, { useContext, useEffect } from 'react';
import PlanetsContext from '../context/PlanetsContext';

const tableHeaders = [
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

  useEffect(() => {
    getPlanets();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const planetsToDisplay = planets.filter((planet) => {
    if (filters.name) {
      return planet.name.toLowerCase().includes(filters.name.toLowerCase());
      // Make case insensitive
    }
    return true;
  });

  return (
    <table>
      <thead>
        <tr>
          {tableHeaders.map((tableHeader) => (
            <th key={ tableHeader }>{tableHeader}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {planetsToDisplay.map((planet) => (
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

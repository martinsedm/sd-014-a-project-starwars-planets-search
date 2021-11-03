import React, { useContext } from 'react';
import StarsContext from '../context/myContext';

const headers = [
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

export default function TableComponent() {
  const { filters, planetas } = useContext(StarsContext);

  const filteredPlanets = planetas.filter((planet) => {
    if (filters.name) {
      return planet.name.toLowerCase().includes(filters.name.toLowerCase());
    }
    return planetas;
  });

  return (
    <table className="table table-dark">
      <thead>
        <tr>
          {headers.map((h2) => (
            <th key={ h2 }>
              {h2}
            </th>))}
        </tr>
      </thead>
      <tbody>
        {filteredPlanets.map((planeta) => (
          <tr key={ planeta.name }>
            <td>{ planeta.name }</td>
            <td>{ planeta.rotation_period }</td>
            <td>{ planeta.orbital_period }</td>
            <td>{ planeta.diameter}</td>
            <td>{ planeta.climate}</td>
            <td>{ planeta.gravity}</td>
            <td>{ planeta.terrain}</td>
            <td>{ planeta.surface_water}</td>
            <td>{ planeta.population}</td>
            <td>{ planeta.residents}</td>
            <td>{ planeta.films}</td>
            <td>{ planeta.created}</td>
            <td>{ planeta.edited}</td>
            <td>{ planeta.url}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

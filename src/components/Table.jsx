import React, { useContext, useEffect } from 'react';
import PlanetContext from '../contexts/PlanetContext';
import TableRow from './TableRow';

export default function Table() {
  const { planets, fetchPlanets, filters } = useContext(PlanetContext);

  useEffect(() => {
    fetchPlanets();
  }, [fetchPlanets]);

  const filterNames = () => {
    if (filters.filterByName.name) {
      return planets.filter(
        ({ name }) => name.toLowerCase().includes(filters.filterByName.name),
      );
    }
    return planets;
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
        <TableRow planets={ filterNames() } />
      </tbody>
    </table>
  );
}

import React, { useContext, useEffect } from 'react';
import PlanetContext from '../contexts/PlanetContext';

export default function Table() {
  const { planets, fetchPlanets } = useContext(PlanetContext);

  useEffect(() => {
    fetchPlanets();
  }, [fetchPlanets]);

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
        {planets.map((planet) => (
          <tr key={ planet.name }>
            {Object.keys(planet).map((key, index) => (
              <td key={ index }>
                {' '}
                {planet[key]}
                {' '}
              </td>))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

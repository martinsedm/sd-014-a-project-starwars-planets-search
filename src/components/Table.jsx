import React, { useContext } from 'react';
import ContextPlanets from './ContextPlanets';

export default function Table() {
  const { planets, loading } = useContext(ContextPlanets);
  if (!planets) return null;
  if (loading) return <span>Loading...</span>;
  return (
    <div>
      <table>
        <thead>
          <tr>
            {
              Object.keys(planets[0])
                .map((planet, index) => <th key={ index }>{ planet }</th>)
            }
          </tr>
        </thead>
        <tbody>
          {
            planets.map((planet, index) => (
              <tr key={ index.name }>
                <td>{ planet.name}</td>
                <td>{ planet.rotation_period }</td>
                <td>{ planet.orbital_period }</td>
                <td>{ planet.diameter }</td>
                <td>{ planet.climate }</td>
                <td>{ planet.gravity }</td>
                <td>{ planet.terrain }</td>
                <td>{ planet.surface_water }</td>
                <td>{ planet.population }</td>
                <td>{ planet.films }</td>
                <td>{ planet.created }</td>
                <td>{ planet.edited }</td>
                <td>{ planet.url }</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

import React, { useContext } from 'react';
import ContextPlanets from './ContextPlanets';

export default function Table() {
  const { planets, loading, filter } = useContext(ContextPlanets);
  const { filterByName } = filter;
  if (!planets) return null;
  if (loading) return <span>Loading...</span>;

  const filteredPlanets = planets.filter((planet) => {
    if (filterByName !== '') {
      return planet.name.toLowerCase().includes(filterByName.name.toLowerCase());
    }
    return planet;
  });

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
            filteredPlanets.map((planet, index) => (
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

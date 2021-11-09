import React, { useContext } from 'react';
import ContextPlanet from '../Context/ContextPlanet';

export default function Table() {
  const { data, loading } = useContext(ContextPlanet);
  if (!data) return null;
  if (loading) return <p>Loading...</p>;

  return (
    <main>
      <h1>Star Wars Project</h1>
      <table>
        <thead>
          <tr>
            { Object.keys(data[0])
              .map((rowPlanet) => <th key={ rowPlanet }>{ rowPlanet }</th>)}
          </tr>
        </thead>
        <tbody>
          { data.map((planet) => (
            <tr key={ planet.name }>
              <td>{ planet.name }</td>
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
          ))}
        </tbody>
      </table>
    </main>
  );
}

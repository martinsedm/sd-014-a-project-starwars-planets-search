import React, { useContext } from 'react';
import Context from '../contexts/Context';

export default function Table() {
  const contextData = useContext(Context);
  const { planets } = contextData;

  function getIdFromURL(planet) {
    const URL_BASE = 'https://swapi-trybe.herokuapp.com/api/planets/';
    const URLPlanet = planet.url;
    const id = URLPlanet.replace(URL_BASE, '').replace('/', '');
    return id;
  }

  if (planets.length === 0) return <span>Loading...</span>;

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Rotation Period</th>
          <th>Orbital Period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Population</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        { planets.map((planet) => (
          <tr key={ getIdFromURL(planet) }>
            <td>{planet.name}</td>
            <td>{planet.rotation_period}</td>
            <td>{planet.orbital_period}</td>
            <td>{planet.diameter}</td>
            <td>{planet.climate}</td>
            <td>{planet.gravity}</td>
            <td>{planet.terrain}</td>
            <td>{planet.surface_water}</td>
            <td>{planet.population}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

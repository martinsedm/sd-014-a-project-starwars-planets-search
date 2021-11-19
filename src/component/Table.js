import React, { useContext, useEffect } from 'react';
import ContextStar from '../context/ContextStar';

function Table() {
  const { InfoPlanetsAPI, planets } = useContext(ContextStar);
  console.log('check', planets);
  useEffect(() => {
    InfoPlanetsAPI();
  }, []);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>climate</th>
            <th>terrain</th>
            <th>created</th>
            <th>edited</th>
            <th>diameter</th>
            <th>gravity</th>
            <th>orbital_period</th>
            <th>population</th>
            <th>rotation_period</th>
            <th>surface_water</th>
            <th>films</th>
            <th>url</th>
          </tr>
        </thead>
        <tbody>
          { planets.map((planet, index) => (
            <tr key={ index }>
              <td>{planet.name}</td>
              <td>{planet.climate}</td>
              <td>{planet.terrain}</td>
              <td>{planet.created}</td>
              <td>{planet.edited}</td>
              <td>{planet.diameter}</td>
              <td>{planet.gravity}</td>
              <td>{planet.orbital_period}</td>
              <td>{planet.population}</td>
              <td>{planet.rotation_period}</td>
              <td>{planet.surface_water}</td>
              <td>{planet.films}</td>
              <td>{planet.url}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;

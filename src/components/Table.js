import React, { useEffect, useContext } from 'react';
import planetContext from '../context';

function Table() {
  const { data, getPlanets } = useContext(planetContext);
  console.log(data);

  useEffect(() => { getPlanets(); }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>rotation_period</th>
          <th>orbital_period</th>
          <th>diameter</th>
          <th>climate</th>
          <th>gravity</th>
          <th>terrain</th>
          <th>surface_water</th>
          <th>population</th>
          <th>films</th>
          <th>created</th>
          <th>edited</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        { data.map((item, index) => (
          <tr key={ index }>
            <td>{ item.name}</td>
            <td>{ item.rotation_period }</td>
            <td>{ item.orbital_period }</td>
            <td>{ item.diameter}</td>
            <td>{ item.climate}</td>
            <td>{ item.gravity}</td>
            <td>{ item.terrain}</td>
            <td>{ item.surface_water}</td>
            <td>{ item.population}</td>
            <td>{ item.films}</td>
            <td>{ item.created}</td>
            <td>{ item.edited}</td>
            <td>{ item.url}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;

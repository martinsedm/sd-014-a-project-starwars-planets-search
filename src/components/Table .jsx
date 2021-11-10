import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Table() {
  const { planets, filters } = useContext(PlanetsContext);
  const { filterByName: { name } } = filters;

  const filteredPlanets = planets.filter((planet) => {
    if (name !== '') {
      return planet.name.toLowerCase().includes(name.toLowerCase());
    }
    return planet;
  });

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
        { filteredPlanets.map(({
          name: NAME_PLANET,
          rotation_period: ROTATION_PERIOD,
          orbital_period: ORBITAL_PERIOD,
          diameter,
          climate,
          gravity,
          terrain,
          surface_water: SURFACE_WATER,
          population,
          films,
          created,
          edited,
          url,
        }, index) => (
          <tr key={ index }>
            <td>{ NAME_PLANET }</td>
            <td>{ ROTATION_PERIOD }</td>
            <td>{ORBITAL_PERIOD}</td>
            <td>{diameter}</td>
            <td>{climate}</td>
            <td>{gravity}</td>
            <td>{terrain}</td>
            <td>{SURFACE_WATER}</td>
            <td>{population}</td>
            <td>{films}</td>
            <td>{created}</td>
            <td>{edited}</td>
            <td>{url}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;

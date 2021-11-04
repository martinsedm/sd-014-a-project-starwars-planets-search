import React, { useContext, useEffect } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Table() {
  const { planets, isLoading, setLoading } = useContext(PlanetsContext);

  useEffect(() => {
    if (!planets) setLoading(true);
    if (planets) setLoading(false);
  }, [planets, setLoading]);

  const renTableInfo = () => (
    planets.map((planet, index) => (
      <tr key={ index }>
        <td>{ planet.name }</td>
        <td>{planet.rotation_period}</td>
        <td>{planet.orbital_period}</td>
        <td>{planet.diameter}</td>
        <td>{planet.climate}</td>
        <td>{planet.gravity}</td>
        <td>{planet.terrain}</td>
        <td>{planet.surface_water}</td>
        <td>{planet.population}</td>
        <td>
          <ul>
            {planet.films
              .map((film, indexB) => <li key={ indexB }>{film}</li>)}
          </ul>
        </td>
        <td>{planet.created}</td>
        <td>{planet.edited}</td>
        <td>{planet.url}</td>
      </tr>
    )));

  return (
    <div>
      <h1>Star Wars Planet Search</h1>
      <table>
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
        {!isLoading && renTableInfo()}
      </table>
    </div>
  );
}

export default Table;

import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Table() {
  const { data, filters } = useContext(PlanetsContext);
  const { order: { column, sort } } = filters;

  // Inspirado no GitHub de Fernando Oliveira https://github.com/tryber/sd-014-a-project-starwars-planets-search/pull/80#pullrequestreview-800276553
  data.sort((a, b) => {
    let firstElement = a[column];
    let secondElement = b[column];
    const MINUS_ONE = -1;
    if (column !== 'name') {
      firstElement = Number(a[column]);
      secondElement = Number(b[column]);
    }
    if (firstElement < secondElement) {
      return MINUS_ONE;
    }
    if (firstElement > secondElement) {
      return 1;
    }
    return 0;
  });

  if (sort === 'DESC') {
    data.reverse();
  }

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
        {data.map((planet) => (
          <tr key={ planet.name }>
            <td data-testid="planet-name">{planet.name}</td>
            <td>{planet.rotation_period}</td>
            <td>{planet.orbital_period}</td>
            <td>{planet.diameter}</td>
            <td>{planet.climate}</td>
            <td>{planet.gravity}</td>
            <td>{planet.terrain}</td>
            <td>{planet.surface_water}</td>
            <td>{planet.population}</td>
            <td>{planet.films}</td>
            <td>{planet.created}</td>
            <td>{planet.edited}</td>
            <td>{planet.url}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;

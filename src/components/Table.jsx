import React, { useContext } from 'react';
import StarWarsContext from '../Context/StarWarsContext';
import Tr from './Tr';

function Table() {
  const { planets, filters } = useContext(StarWarsContext);
  const { order: { column, sort } } = filters;

  const sortedPlanets = planets.sort((a, b) => {
    let first = a[column];
    let second = b[column];
    if (column === 'orbital_period') {
      first = Number(first);
      second = Number(second);
    }
    const MINUS_ONE = -1;
    switch (sort) {
    case 'ASC':
      return first > second ? 1 : MINUS_ONE;
    case 'DESC':
      return first < second ? 1 : MINUS_ONE;
    default:
      return 0;
    }
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
          <th>Url</th>
        </tr>
      </thead>
      <tbody>
        { sortedPlanets.map((planet) => <Tr key={ planet.url } planet={ planet } />) }
      </tbody>
    </table>
  );
}

export default Table;

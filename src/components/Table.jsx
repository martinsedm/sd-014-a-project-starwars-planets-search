import React, { useContext } from 'react';
import StarWarsContext from '../Context/StarWarsContext';
import Tr from './Tr';

function Table() {
  const { planets } = useContext(StarWarsContext);
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
        { planets.map((planet) => <Tr key={ planet.url } planet={ planet } />) }
      </tbody>
    </table>
  );
}

export default Table;

import React, { useContext } from 'react';
import AppContext from '../context/StarWarsContext';
import TableRow from './TableRow';

function Table() {
  const { filteredPlanets } = useContext(AppContext);

  if (filteredPlanets.length === 0) return (<div>Loading...</div>);
  return filteredPlanets.length > 0 && (
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
        {filteredPlanets
          .map((planet) => <TableRow key={ planet.url } planet={ planet } />)}
      </tbody>
    </table>
  );
}

export default Table;

import React, { useContext } from 'react';
import AppContext from '../context/StarWarsContext';
import TableRow from './TableRow';

function Table() {
  const { data } = useContext(AppContext);
  // console.log(data);

  // console.log(data, 'data');

  if (data.length === 0) return (<div>Loading...</div>);
  return data.length > 0 && (
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
        { data.map((planet) => <TableRow key={ planet.url } planet={ planet } />) }
      </tbody>
    </table>
  );
}

export default Table;

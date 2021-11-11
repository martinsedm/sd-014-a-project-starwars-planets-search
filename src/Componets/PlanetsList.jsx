import React, { useContext } from 'react';

import PlanetsContext from '../Context/PlanetsContext';
import PlanetDetails from './PlanetDetails';

export default function PlanetsList() {
  const { data } = useContext(PlanetsContext);

  return (
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
      { data.map((e, index) => <PlanetDetails key={ index } planet={ e } />)}
    </table>
  );
}

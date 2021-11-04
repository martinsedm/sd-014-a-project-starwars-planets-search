import React, { useContext } from 'react';
import PlanetsContext from './context/PlanetsContext';
import './Table.css';

function Table() {
  const { data } = useContext(PlanetsContext);

  const tableHeadMaker = () => (
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
  );

  const tableBodyMaker = () => {
    const planetData = data.map((planet) => (
      <tr key={ planet }>
        { Object.values(planet).map((info) => <td key={ info }>{info}</td>) }
      </tr>
    ));
    return planetData;
  };

  return (
    <table>
      <thead>
        {tableHeadMaker()}
      </thead>
      <tbody>
        {tableBodyMaker()}
      </tbody>
    </table>
  );
}

export default Table;

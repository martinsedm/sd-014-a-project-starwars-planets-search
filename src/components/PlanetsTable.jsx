import React, { useContext } from 'react';
import MyContext from '../context/MyContext';
import { tableHeaders } from '../services/data';

function PlantesTable() {
  const { planets } = useContext(MyContext);
  return (
    <table>
      <thead>
        <tr>
          {tableHeaders.map((header, idx) => <th key={ idx }>{header}</th>)}
        </tr>
      </thead>
      <tbody>
        {planets.map((planet) => (
          <tr key={ planet }>
            {Object.values(planet).map((planetInfo) => (
              <td key={ planet }>{ planetInfo }</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default PlantesTable;

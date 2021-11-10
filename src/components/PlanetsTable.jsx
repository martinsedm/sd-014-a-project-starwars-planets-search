import React, { useContext } from 'react';
import MyContext from '../context/MyContext';
import { tableHeaders } from '../services/data';

function PlantesTable() {
  const { filteredPlanets } = useContext(MyContext);
  return (
    <table>
      <thead>
        <tr>
          {tableHeaders.map((header) => <th key={ header }>{header}</th>)}
        </tr>
      </thead>
      <tbody>
        {filteredPlanets.filter.map((planet) => (
          <tr key={ planet }>
            {Object.values(planet).map((planetInfo) => (
              <td key={ planetInfo }>{ planetInfo }</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default PlantesTable;

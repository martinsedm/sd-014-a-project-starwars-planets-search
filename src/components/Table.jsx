import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Table() {
  const { results } = useContext(PlanetsContext);

  if (results) {
    const tableHeader = results.filter((planet) => delete planet.residents);
    console.log(tableHeader);

    return (
      <table>
        <thead>
          <tr>
            { Object.keys(tableHeader[0]).map((header) => (
              <th key={ header }>{ header }</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableHeader.map((planet) => (
            <tr key={ planet.name }>
              {Object.values(planet).map((value) => <td key={ value }>{value}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  return <p>Loading...</p>;
}

export default Table;

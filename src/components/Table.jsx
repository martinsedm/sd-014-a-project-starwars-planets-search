import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Table() {
  const {
    data: { results },
    filter: { filters },
  } = useContext(PlanetsContext);
  const {
    filterByName: { name },
  } = filters;

  if (!results || !results.length) return <p>Loading...</p>;

  if (results) {
    const tableHeader = results.filter((planet) => delete planet.residents);

    return (
      <table>
        <thead>
          <tr>
            {Object.keys(tableHeader[0]).map((header) => (
              <th key={ header }>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {!name
            ? tableHeader.map((planet) => (
              <tr key={ planet.name }>
                {Object.values(planet).map((value) => (
                  <td key={ value }>{value}</td>
                ))}
              </tr>
            ))
            : tableHeader
              .filter((input) => input.name.toLowerCase().includes(name.toLowerCase()))
              .map((planet) => (
                <tr key={ planet.name }>
                  {Object.values(planet).map((value) => (
                    <td key={ value }>{value}</td>
                  ))}
                </tr>
              ))}
        </tbody>
      </table>
    );
  }
}

export default Table;

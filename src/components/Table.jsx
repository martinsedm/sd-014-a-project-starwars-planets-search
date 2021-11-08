import React, { useContext } from 'react';
import Context from '../context/Context';

function Table() {
  const {
    data: { results },
    filter: { filters },
  } = useContext(Context);
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

// https://github.com/tryber/sd-014-a-project-starwars-planets-search/pull/92/commits/1650d10b929bbd174ea4c8d6b7766a1f01e361bc

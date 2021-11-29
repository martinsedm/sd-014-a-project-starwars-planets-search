import React, { useContext } from 'react';
import StarContext from '../context/starContext';

// ferramenta utilizada como base: https://www.tablesgenerator.com/
function Table() {
  const { data, filteredData, filter } = useContext(StarContext);
  const headers = Object.keys(data[0]);
  const planets = filter.filterByName.name === '' ? data : filteredData;
  // const planets = filteredData.length > 0 ? Object.values(filteredData) : Object.values(data);
  console.log(planets);

  const rows = planets.map((planet) => headers.map((header) => planet[header]));
  return (
    <table>
      <thead>
        <tr>
          { headers.map((header, i) => (<th key={ i }>{header}</th>)) }
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={ i }>
            {row.map((cell, index) => (
              <td key={ index }>{cell}</td>
            ))}
          </tr>
        ))}

        {/* {planets.map((planet, i) => (
          <tr key={ i }>
            {Object.values(planets[i])
              .map((header, index) => <td key={ index }>{header}</td>)}
          </tr>))} */}
      </tbody>
    </table>
  );
}

export default Table;

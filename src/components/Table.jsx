import React, { useContext } from 'react';
import StarContext from '../context/starContext';
// ferramenta utilizada como base: https://www.tablesgenerator.com/
function Table() {
  const { data } = useContext(StarContext);
  const headers = Object.keys(data[0]);
  const planets = Object.values(data);
  console.log(planets);
  return (
    <table>
      <thead>
        <tr>
          {headers.map((header, i) => <th key={ i }>{header}</th>)}
        </tr>
      </thead>
      <tbody>
        {planets.map((planet, i) => (
          <tr key={ i }>
            {Object.values(planets[i])
              .map((header, index) => <td key={ index }>{header}</td>)}
          </tr>))}
      </tbody>
    </table>
  );
}

export default Table;

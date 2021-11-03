import React from 'react';

export default function TableRow({ planets }) {
  return planets.map((planet) => (
    <tr key={ planet.name }>
      {Object.keys(planet).map((key, index) => (
        <td key={ index }>{planet[key]}</td>
      ))}
    </tr>
  ));
}

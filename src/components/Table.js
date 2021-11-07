import React, { useContext } from 'react';

import PlanetContext from '../context/PlanetContext';

function Table() {
  const { planets } = useContext(PlanetContext);

  return (planets.length > 0 ? (
    <table>
      <thead>
        <tr>
          { Object.keys(planets[0]) // By getting the key of any object inside the array of planets (each planet is an object), We get the cell/Header name of the object keys
            .map((item, index) => <th key={ index }>{ item }</th>)}
        </tr>
      </thead>
      <tbody>
        { planets.map((planet, index) => (
          <tr key={ index }>
            { Object.values(planet)
              .map((item, index2) => <td key={ index2 }>{ item }</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  ) : (<span>No Planet Found!</span>)
  );
}

export default Table;

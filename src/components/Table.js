import React, { useContext } from 'react';

import PlanetContext from '../context/PlanetContext';

function Table() {
  const { data, name } = useContext(PlanetContext);
  console.log(data);
  const validKeys = ['name', 'rotation_period', 'orbital_period', 'diameter',
    'climate', 'gravity', 'terrain', 'surface_water', 'population',
    'films', 'created', 'edited', 'url'];

  const correctData = data.map((item, index) => {
    index = validKeys.reduce((acc, cur) => {
      acc[cur] = data[index][cur];
      return acc;
    }, {});
    return index;
  });

  const nameFilteredData = name ? (correctData.filter((planet) => (
    planet.name.includes(name)
  ))) : correctData;

  return (nameFilteredData.length > 1 ? (
    <table>
      <thead>
        <tr>
          { Object.keys(nameFilteredData[0]) // By getting the key of any object inside the array of planets (each planet is an object), We get the cell/Header name of the object keys
            .map((item, index) => <th key={ index }>{ item }</th>)}
        </tr>
      </thead>
      <tbody>
        { nameFilteredData.map((planet, index) => (
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

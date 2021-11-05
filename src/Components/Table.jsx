import React, { useContext } from 'react';
import Context from '../Context/Context';

function Table() {
  const {
    data,
    loaded,
    filters: {
      filterByName: {
        name,
      },
    },
    // filters,
  } = useContext(Context);

  return (
    <table>
      <thead>
        <tr>
          {loaded && Object.keys(data[0]).map((planetCharacteristics, index) => (
            <th key={ index }>{ planetCharacteristics }</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {loaded
        && data
          .filter((planet) => planet.name.includes(name))
          .map((planet, index) => (
            <tr key={ `${planet.name}-${index}` }>
              <td>{ planet.name }</td>
              <td>{ planet.rotation_period }</td>
              <td>{ planet.orbital_period }</td>
              <td>{ planet.diameter }</td>
              <td>{ planet.climate }</td>
              <td>{ planet.gravity }</td>
              <td>{ planet.terrain }</td>
              <td>{ planet.surface_water }</td>
              <td>{ planet.population }</td>
              <td>{ planet.films }</td>
              <td>{ planet.created }</td>
              <td>{ planet.edited }</td>
              <td>{ planet.url }</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default Table;

import React, { useContext } from 'react';
import Context from '../Context/Context';

function Table() {
  const { project, isLoading } = useContext(Context);
  const values = Object.values(project);
  const header = ['name',
    'rotation_period', 'planet.orbital_period',
    'planet.diameter', 'planet.climate', 'planet.gravity',
    'planet.terrain',
    'planet.surface_water',
    'planet.population',
    'planet.films',
    'planet.created',
    'planet.edited',
    'planet.url'];

  // console.log(valuesContext);

  if (isLoading) return <h3>Loading...</h3>;

  return (

    <table>
      <thead>
        <tr>
          {header.map((name) => (
            <th key={ name }>
              {name}
            </th>))}
        </tr>
      </thead>
      <tbody>

        {values.map((planet, i) => (
          <tr key={ i }>
            <td>{ planet.name}</td>
            <td>{ planet.rotation_period}</td>
            <td>{ planet.orbital_period}</td>
            <td>{ planet.diameter}</td>
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

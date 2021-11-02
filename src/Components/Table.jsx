import React, { useContext } from 'react';
import Context from '../Context/Context';

export const header = ['name',
  'rotation_period', 'orbital_period',
  'diameter', 'climate', 'gravity',
  'terrain',
  'surface_water',
  'population',
  'films',
  'created',
  'edited',
  'url'];

function Table() {
  const { project, isLoading, filterMap } = useContext(Context);

  // console.log(valuesContext);

  if (isLoading) return <h3>Loading...</h3>;

  return (
    <div>
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
          {/*  para a 2º questão consegui clarear c/ consulta ao repo de
         Marcus Rodrigues - Turma 13B */}
          {filterMap(project).map((planet, i) => (
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
    </div>
  );
}

export default Table;

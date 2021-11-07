import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import FilterByname from './FilterByname';

function Table() {
  const { data,
    filter: { filters: { filterByName: { name } } },
  } = useContext(StarWarsContext);
  if (data.length === 0) {
    return null;
  }

  const columns = Object.keys(data[0]);

  return (
    <main>
      <FilterByname />
      <table>
        <thead>
          <tr>
            { columns.map((column) => (<th key={ column }>{ column }</th>)) }
          </tr>
        </thead>
        <tbody>
          { data.filter(({ name: namePlanet }) => namePlanet.includes(name))
            .map((planet) => (
              <tr key={ planet.name }>
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
            )) }
        </tbody>
      </table>
    </main>
  );
}

export default Table;

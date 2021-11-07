import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function PlanetsTable() {
  const { planets, filter: { filters } } = useContext(StarWarsContext);
  const { filterByName: { name } } = filters;

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Rotation Period</th>
          <th>Orbital Period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Population</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>Url</th>
        </tr>
      </thead>
      <tbody>
        {
          planets.filter((value) => value.name.toLowerCase().includes(name.toLowerCase()))
            .map((planetInfo, i) => (
              <tr
                key={ i }
              >
                <td>{ planetInfo.name }</td>
                <td>{ planetInfo.rotation_period }</td>
                <td>{ planetInfo.orbital_period }</td>
                <td>{ planetInfo.diameter }</td>
                <td>{ planetInfo.climate }</td>
                <td>{ planetInfo.gravity }</td>
                <td>{ planetInfo.terrain }</td>
                <td>{ planetInfo.surface_water }</td>
                <td>{ planetInfo.population }</td>
                <td>{ planetInfo.residents }</td>
                <td>{ planetInfo.films }</td>
                <td>{ planetInfo.created }</td>
                <td>{ planetInfo.edited }</td>
                <td>{ planetInfo.url }</td>
              </tr>
            ))
        }
      </tbody>
    </table>
  );
}

export default PlanetsTable;

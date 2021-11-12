import React, { useContext } from 'react';
import PlanetasContext from '../context/PlanetasContext';

function Table() {
  const { isCarregando,
    rendirizarPlanetas,
  } = useContext(PlanetasContext);

  if (isCarregando) {
    return <h4>Carregando...</h4>;
  }

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
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        {
          rendirizarPlanetas.map((planetas, index) => (
            <tr key={ index }>
              <td data-testid="planet-name">{ planetas.name }</td>
              <td>{ planetas.rotation_period }</td>
              <td>{ planetas.orbital_period }</td>
              <td>{ planetas.diameter }</td>
              <td>{ planetas.climate }</td>
              <td>{ planetas.gravity }</td>
              <td>{ planetas.terrain }</td>
              <td>{ planetas.surface_water }</td>
              <td>{ planetas.population }</td>
              <td>{ planetas.surface_water }</td>
              <td>{ planetas.population }</td>
              <td>{ planetas.films }</td>
              <td>{ planetas.created }</td>
              <td>{ planetas.edited }</td>
              <td>{ planetas.url }</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}

export default Table;

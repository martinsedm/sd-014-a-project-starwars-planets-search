import React, { useContext } from 'react';
import PlanetasContext from '../context/PlanetasContext';

function Table() {
  const { isCarregando,
    planetasFiltrados,
    filtrar: { filtrarValoresNumericos },
  } = useContext(PlanetasContext);

  const { column, comparison, value } = filtrarValoresNumericos[0];

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
        { planetasFiltrados.filter((planetas) => {
          if (!value) return planetas;
          if (comparison === 'maior que') return Number(planetas[column]) > Number(value);
          if (comparison === 'menor que') return Number(planetas[column]) < Number(value);
          if (comparison === 'igual a') return Number(planetas[column]) === Number(value);
          return planetas;
        })
          .map((planetas, index) => (
            <tr key={ index }>
              <td>{ planetas.name }</td>
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
          ))}
      </tbody>
    </table>
  );
}

export default Table;

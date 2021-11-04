import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

// Req. 1: Criação de tabela com as chaves de results (exceto residents)
// Req. 2: Filtra somente nomes de planetas que correspondam ao que for digitado no input de busca
function Table() {
  const { data, filter: { filters } } = useContext(PlanetsContext); // são trazidos de Provider através do parâmetro de value
  const { filterByName: { name } } = filters;

  return (
    <div>
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
          { data
            .filter((value) => value.name.toLowerCase().includes(name.toLowerCase()))
            .map((planet, index) => (
              <tr key={ index }>
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
    </div>
  );
}

export default Table;

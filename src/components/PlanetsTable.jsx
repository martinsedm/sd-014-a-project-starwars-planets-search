import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

export default function PlanetsTable() {
  const { planets } = useContext(StarWarsContext);
  console.log(planets);

  function showPlanets() {
    const showExpenses = planets.map((planet) => (
      <tr key={ planet.name }>
        <td>{ planet.name }</td>
        <td>{ planet.climate }</td>
        <td>{ planet.created }</td>
        <td>{ planet.diameter }</td>
        <td>{ planet.edited }</td>
        <td>{ planet.films }</td>
        <td>{ planet.gravity }</td>
        <td>{ planet.orbital_period }</td>
        <td>{ planet.population }</td>
        <td>{ planet.residents }</td>
        <td>{ planet.rotation_period }</td>
        <td>{ planet.surface_water }</td>
        <td>{ planet.terrain }</td>
        <td>{ planet.url }</td>
      </tr>
    ));
    return showExpenses;
  }

  function showTable() {
    return (
      <tr>
        <th>Nome</th>
        <th>Clima</th>
        <th>Criado</th>
        <th>Diâmetro</th>
        <th>Editado</th>
        <th>Filmes</th>
        <th>Periodo da órbita</th>
        <th>População</th>
        <th>Residentes</th>
        <th>Tempo de rotação</th>
        <th>Água</th>
        <th>Terreno</th>
        <th>URL</th>
      </tr>

    );
  }

  return (
    <div>
      <span>Hello, StarWars!</span>
      <p />
      <table>
        <thead>
          { showTable()}
        </thead>
        <tbody>
          { showPlanets() }
        </tbody>
      </table>
    </div>
  );
}

import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

export default function PlanetsTable() {
  const { planets,
    filter: { filters: { filterByName: { name } } } } = useContext(StarWarsContext);

  function showPlanets(world) {
    const showExpenses = world.map((planet) => (
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

  function filterPlanets() {
    const filter = planets.filter((planet) => planet.name.includes(name));
    return filter;
  }

  return (
    <div>
      <table>
        <thead>
          { showTable()}
        </thead>
        <tbody>
          { name.lenght === 0 ? showPlanets(planets)
            : showPlanets(filterPlanets()) }
        </tbody>
      </table>
    </div>
  );
}

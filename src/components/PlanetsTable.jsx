import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import '../index.css';

export default function PlanetsTable() {
  const { planets, control: { control },
    filter: { filters: {
      filterByNumericValues,
      filterByName: { name } } } } = useContext(StarWarsContext);

  function showPlanets(world) {
    const showExpenses = world.map((planet) => (
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
    ));
    return showExpenses;
  }

  function showTable() {
    return (
      <tr>
        <th>Nome</th>
        <th>Tempo de rotação</th>
        <th>Periodo da órbita</th>
        <th>Diâmetro</th>
        <th>Clima</th>
        <th>Gravidade</th>
        <th>Terreno</th>
        <th>Água</th>
        <th>População</th>
        <th>Filmes</th>
        <th>Criado</th>
        <th>Editado</th>
        <th>URL</th>
      </tr>

    );
  }

  function filterPlanets() {
    if (name.length !== 0) {
      const filter = planets.filter((planet) => planet.name.includes(name));
      return filter;
    }
    return planets;
  }

  function filterPlanetsByComparison() {
    const { column,
      comparison,
      value } = filterByNumericValues[filterByNumericValues.length - 1];
    if (control === 1) {
      const filter = planets.filter((planet) => {
        switch (comparison) {
        case 'greater':
          return Number(planet[column]) > value;
        case 'less':
          return Number(planet[column]) < value;
        default:
          return planet[column] === value;
        }
      });
      return filter;
    }

    console.log(column, comparison, value);
    return filterPlanets();
  }

  return (
    <div>
      <table>
        <thead>
          { showTable() }
        </thead>
        <tbody>
          { showPlanets(filterPlanetsByComparison()) }
        </tbody>
      </table>
    </div>
  );
}

import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function PlanetsTable() {
  const { data, filterPlanets } = useContext(StarWarsContext);

  const dataTable = () => data.filter((planet) => planet.name.includes(filterPlanets))
    .map((planet, index) => (
      <tr key={ index }>
        <td>{planet.name}</td>
        <td>{planet.rotation_period}</td>
        <td>{planet.orbital_period}</td>
        <td>{planet.diameter}</td>
        <td>{planet.climate}</td>
        <td>{planet.gravity}</td>
        <td>{planet.terrain}</td>
        <td>{planet.surface_water}</td>
        <td>{planet.population}</td>
        <td>{planet.films}</td>
        <td>{planet.created}</td>
        <td>{planet.edited}</td>
        <td>{planet.url}</td>
      </tr>
    ));

  return (
    <tbody>
      { dataTable() }
    </tbody>
  );
}

export default PlanetsTable;

import React, { useContext } from 'react';
import starWarsPlanetsContext from '../../context/StarWarsPlanetsContext';

function BodyTable() {
  const { data, planetsFiltered } = useContext(starWarsPlanetsContext);

  return (
    <tbody>
      { data.length > 0 && planetsFiltered.map((planet) => (
        <tr key={ planet.name }>
          <td data-testid="planet-name">{planet.name}</td>
          <td>{planet.climate}</td>
          <td>{planet.created}</td>
          <td>{planet.diameter}</td>
          <td>{planet.edited}</td>
          <td>{planet.films}</td>
          <td>{planet.gravity}</td>
          <td>{planet.orbital_period}</td>
          <td>{planet.population}</td>
          <td>{planet.rotation_period}</td>
          <td>{planet.surface_water}</td>
          <td>{planet.terrain}</td>
          <td>{planet.url}</td>

        </tr>
      ))}
    </tbody>
  );
}

export default BodyTable;

import React, { useContext } from 'react';
import ContextPlanet from '../context/ContextPlanet';

function Table() {
  const { data, isLoading } = useContext(ContextPlanet);
  if (isLoading === true) return <p>Carregando...</p>;
  return (
    <table>
      <thead>
        <tr>
          {Object.keys(data[0]).map((information) => (
            <th key={ information }>
              {information}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((information) => (
          <tr key={ information.diameter }>
            <td>{information.name}</td>
            <td>{information.rotation_period}</td>
            <td>{information.orbital_period}</td>
            <td>{information.diameter}</td>
            <td>{information.climate}</td>
            <td>{information.gravity}</td>
            <td>{information.terrain}</td>
            <td>{information.surface_water}</td>
            <td>{information.population}</td>
            <td>{information.films}</td>
            <td>{information.created}</td>
            <td>{information.edited}</td>
            <td>{information.url}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;

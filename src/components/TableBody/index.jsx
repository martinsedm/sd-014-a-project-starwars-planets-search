import React, { useContext } from 'react';
import GlobalContext from '../../context/context';

function TableBody() {
  const { data, isLoading } = useContext(GlobalContext);

  return (
    <tbody>
      {
        isLoading
          ? <p>Carregando</p>
          : data.results.map((planet) => (
            <tr key={ planet.name }>
              <td>{planet.name}</td>
              <td>{planet.rotation_period}</td>
              <td>{planet.orbital_period}</td>
              <td>{planet.diameter}</td>
              <td>{planet.climate}</td>
              <td>{planet.gravity}</td>
              <td>{planet.terrain}</td>
              <td>{planet.surface_water}</td>
              <td>{planet.population}</td>
              <td>
                {planet.films.map((film) => (
                  <p key={ film }>{film}</p>
                ))}
              </td>
              <td>{planet.created}</td>
              <td>{planet.edited}</td>
              <td>{planet.url}</td>
            </tr>
          ))
      }
    </tbody>
  );
}

export default TableBody;

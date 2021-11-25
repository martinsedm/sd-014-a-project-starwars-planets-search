import React, { useContext } from 'react';

import StarWarsContext from '../context/StarWarsPlanetsContext';

function BodyTable() {
  const { data } = useContext(StarWarsContext);
  console.log(data);

  // Referência: https://www.homehost.com.br/blog/criar-sites/tabela-html/

  return (
    <tbody>
      {data.map((planet) => (

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
          <td>{planet.films}</td>
          <td>{planet.created}</td>
          <td>{planet.edited}</td>
          <td>{planet.url}</td>
        </tr>

      ))}
    </tbody>
  );
}

export default BodyTable;

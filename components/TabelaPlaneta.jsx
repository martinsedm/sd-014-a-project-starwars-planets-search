import React, { useContext } from 'react';

import ContextTabela from '../context/ContextTabela';
import FiltroNome from './FiltroNome';

function TabelaPlaneta() {
  const { data, titles, filterName } = useContext(ContextTabela);

  return (
    <section>
      <FiltroNome />
      <table border="1">
        <thead>
          <tr>
            {titles.map((title) => (
              <th key={ title }>{ title }</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data
            .filter((planet) => planet.name.includes(filterName))
            .map((planets, index) => (
              <tr key={ index }>
                <td>{ planets.name }</td>
                <td>{ planets.rotation_period }</td>
                <td>{ planets.orbital_period }</td>
                <td>{ planets.diameter }</td>
                <td>{ planets.climate }</td>
                <td>{ planets.gravity }</td>
                <td>{ planets.terrain }</td>
                <td>{ planets.surface_water }</td>
                <td>{ planets.population }</td>
                <td>{ planets.films }</td>
                <td>{ planets.created }</td>
                <td>{ planets.edited }</td>
                <td>{ planets.url }</td>
              </tr>
            ))}
        </tbody>
      </table>
    </section>
  );
}

export default TabelaPlaneta;

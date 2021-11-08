import React, { useContext } from 'react';

import ContextTabela from '../context/ContextTabela.jpx';

function TabelaPlaneta() {
  const { data, titles } = useContext(ContextTabela);

  return (
    <section>
      <table border="1">
        <thead> {/* thead - tag é usada para agrupar o conteúdo do cabeçalho em uma tabela HTML. */}
          <tr> {/* tr - tag define uma linha em uma tabela HTML. */}
            {titles.map((title) => <th key={ title }>{title}</th>)}
          </tr>
        </thead>
        <tbody> {/* tbody - tag é usada para agrupar o conteúdo do corpo em uma tabela HTML. */}
          {data.map((planets, index) => (
            <tr key={ index }>
              <td>{planets.name}</td>
              <td>{planets.rotation_period}</td>
              <td>{planets.orbital_period}</td>
              <td>{planets.diameter}</td>
              <td>{planets.climate}</td>
              <td>{planets.gravity}</td>
              <td>{planets.terrain}</td>
              <td>{planets.surface_water}</td>
              <td>{planets.population}</td>
              <td>{planets.films}</td>
              <td>{planets.created}</td>
              <td>{planets.edited}</td>
              <td>{planets.url}</td> {/* td - tag define uma célula de dados padrão em uma tabela HTML. */}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default TabelaPlaneta;

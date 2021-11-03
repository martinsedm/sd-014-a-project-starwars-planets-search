import React from 'react';
import APIContext from '../Context/APIContext';

class Table extends React.Component {
  filtered() {
    const { data, filters: { filterByName: { name } } } = this.context;
    return data.filter((cur) => cur.name.includes(name));
  }

  render() {
    const { data } = this.context;
    return (
      <table>
        <tr>
          {data.length > 0
            && Object.keys(data[0]).map((atual, indice) => (
              atual !== 'url' ? <th key={ `chave-${indice}` }>{atual}</th> : null
            ))}
        </tr>
        {data.length > 0
        && this.filtered().map((atual, indice) => (
          <tr key={ indice }>
            <td>{atual.name}</td>
            <td>{atual.rotation_period}</td>
            <td>{atual.orbital_period}</td>
            <td>{atual.diameter}</td>
            <td>{atual.climate}</td>
            <td>{atual.gravity}</td>
            <td>{atual.terrain}</td>
            <td>{atual.surface_water}</td>
            <td>{atual.population}</td>
            <td>{atual.residents}</td>
            <td>{atual.films}</td>
            <td>{atual.created}</td>
            <td>{atual.edited}</td>
          </tr>
        ))}
      </table>
    );
  }
}
Table.contextType = APIContext;
export default Table;

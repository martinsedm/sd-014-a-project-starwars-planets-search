import React, { useContext } from 'react';
import StarWarsContext from '../context/StarwarsContext';

function mappingBody(element) {
  return element.map((value) => (
    <td key={ value }>
      {value}
    </td>
  ));
}

function mappingHeader(element) {
  return element.map((value) => (
    <th key={ value }>
      {value}
    </th>
  ));
}

function Table() {
  const { keys, values, isFetching } = useContext(StarWarsContext);
  return !isFetching ? (
    <section id="table-elements">
      <table>
        <thead>
          <tr>
            {mappingHeader(keys)}
          </tr>
        </thead>
        <tbody>

          {values.map((element, i) => (
            <tr key={ i }>
              {mappingBody(element)}
            </tr>
          ))}

        </tbody>
      </table>
    </section>
  ) : <span>Carregando...</span>;
}

export default Table;

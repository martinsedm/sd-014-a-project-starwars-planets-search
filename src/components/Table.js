import React, { useContext } from 'react';
import StarwarsContext from '../context/StarwarsContext';

function mappingBody(element) {
  return element.map(([key, value]) => (
    key !== 'residents'
    && (
      <td key={ key }>
        {value}
      </td>
    )
  ));
}

function mappingHeader(element) {
  return element.map((key) => (
    key !== 'residents'
     && (
       <th key={ key }>
         {key}
       </th>
     )
  ));
}

function Table() {
  const { isFetching, data } = useContext(StarwarsContext);
  return !isFetching ? (
    <section id="table-elements">
      <table>
        <thead>
          <tr>
            { data[0]
            && mappingHeader(Object.keys(data[0])) }
          </tr>
        </thead>
        <tbody>

          {data
            .map((element, i) => (
              <tr key={ i }>
                {mappingBody(Object.entries(element))}
              </tr>
            ))}

        </tbody>
      </table>
    </section>
  ) : <span>Carregando...</span>;
}

export default Table;

import React, { useContext } from 'react';
import StarwarsSearch from '../Context/StarwarsContext';

function TablePlanets() {
  const { planetsFiltred } = useContext(StarwarsSearch);
  const itemsHeader = planetsFiltred[0] === undefined ? []
    : Object.keys(planetsFiltred[0]); // utilize uma função que retorne todas chaves de um objeto em arrays
  console.log(itemsHeader);
  return (
    <main>
      {
        // mostrar os filtros que estão ativo verificando no state
      }
      <table>
        <tbody>
          <tr>
            {itemsHeader.map((item) => <th key={ item }>{item}</th>)}
          </tr>
          <tr>
            <td> testes </td>
          </tr>
        </tbody>
      </table>

    </main>
  );
}

export default TablePlanets;

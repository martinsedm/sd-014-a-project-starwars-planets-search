import React, { useContext } from 'react';
import TableContext from '../services/contextPages';

export default function Table() {
  const { filterPlanets, data } = useContext(TableContext);

  const table = () => {
    filterPlanets.forEach((planets) => delete planets.residents);
    return filterPlanets.map((values, index) => {
      const info = Object.entries(values);
      // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
      return (
        <tr key={ index } style={ { paddingLeft: '7.5px' } }>
          {info.map(([key, value]) => <td key={ key }>{value}</td>)}

        </tr>
      );
    });
  };

  return (

    <div>
      <table>
        <thead>
          <tr>
            {Object.keys(data[0]).map((head) => (
              head !== 'residents'
              && <th key={ head } style={ { paddingLeft: '7.5px' } }>{head}</th>))}

          </tr>
        </thead>
        {filterPlanets.length > 0 ? table() : 'Calma!'}
      </table>
    </div>
  );
}

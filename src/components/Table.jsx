import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Table() {
  const { data, filterNames } = useContext(PlanetsContext);

  return (
    <div>
      <table>
        <tr>

          {Object.keys(data[0])
            .map((indexName, indexN) => <th key={ indexN }>{indexName}</th>)}
        </tr>
        {filterNames().map((planeta, i) => (
          <tr key={ i }>
            {Object.values(planeta).map((characterValue, indexC) => (
              <td key={ indexC }>
                {characterValue}
              </td>
            ))}
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Table;

import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Search() {
  const { data, isLoading } = useContext(PlanetsContext);

  if (isLoading) {
    return (<p>...</p>);
  }

  return (
    <table>
      <tr>

        {Object.keys(data[0])
          .map((indexName, indexN) => <th key={ indexN }>{indexName}</th>)}
      </tr>
      {data.map((planeta, i) => (
        <tr key={ i }>
          {Object.values(planeta).map((characterValue, indexC) => (
            <td key={ indexC }>
              {characterValue}
            </td>
          ))}
        </tr>
      ))}
    </table>
  );
}

export default Search;

import React, { useContext } from 'react';
import Context from '../context/Context';

function Table() {
  const { results } = useContext(Context);

  if (results === undefined) return <h2>Loading....</h2>;
  if (results.length === 0) return <h2>No planets were found </h2>;

  return (
    <table>
      <thead>
        <tr>
          { Object.keys(results[0]).map((thead) => (
            <th key={ thead }>{thead.split('_').join('')}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        { results.map((planets) => (
          <tr key={ planets.name }>
            {Object.values(planets).map((value) => <td key={ value }>{value}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;

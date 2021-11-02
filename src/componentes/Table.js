import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function Table() {
  const { data: { results } } = useContext(PlanetContext);
  return (
    <table>
      <thead>
        <tr>
          { Object.keys(results).map((result) => <th key={ result }>{result}</th>)}
        </tr>
      </thead>
    </table>
  );
}

export default Table;

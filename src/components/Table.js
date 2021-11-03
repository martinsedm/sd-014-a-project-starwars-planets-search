import React, { useContext } from 'react';
import StarWarsContext from '../context';

function Table() {
  const { data, populatePlanets } = useContext(StarWarsContext);

  return (
    <table>
      <tr>
        <th>I&apos;m a table</th>
      </tr>
    </table>
  );
}

export default Table;

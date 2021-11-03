import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../context';
import { tableHeads } from '../data';

function Table() {
  const { data, populatePlanets } = useContext(StarWarsContext);

  useEffect(() => {
    populatePlanets();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          {
            tableHeads.map((heading, index) => (
              <th key={ index }>{ heading }</th>
            ))
          }
        </tr>
      </thead>
    </table>
  );
}

export default Table;

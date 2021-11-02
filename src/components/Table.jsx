import React, { useContext } from 'react';

import TableBody from './TableBody';

import planetsContext from '../context/planetsContext';

const Table = () => {
  const { data, isLoading } = useContext(planetsContext);

  if (isLoading) return <p>Loading...</p>;

  const keys = Object.keys(data[0]);
  keys.splice(keys.indexOf('residents'), 1);

  return (
    <table>
      <thead>
        <tr>
          { keys.map((header) => <th key={ header }>{header}</th>) }
        </tr>
      </thead>
      <TableBody />
    </table>
  );
};

export default Table;

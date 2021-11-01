import React, { useContext } from 'react';

import planetSearchContext from '../context/planetsSearchContext';
import TableHeaders from './TableHeaders';
import TableRow from './TableRow';

import filterData from '../utils';

export default function Table() {
  const { filter, data } = useContext(planetSearchContext);

  return (
    <table className="table table-dark table-striped">

      <TableHeaders />

      <tbody>
        {filterData(data, filter)
          .map((planet) => <TableRow key={ planet.name } planet={ planet } />)}
      </tbody>
    </table>
  );
}

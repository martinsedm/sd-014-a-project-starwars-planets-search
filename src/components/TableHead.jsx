import React, { useContext } from 'react';
import planetsContext from '../context/PlanetsContext';
import TableRow from './TableRow';

function TableHead() {
  const { planets } = useContext(planetsContext);
  return (
    <TableRow contents={ planets[0] } head />
  );
}

export default TableHead;

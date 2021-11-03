import React, { useContext } from 'react';
import planetsContext from '../context/PlanetsContext';
import TableRow from './TableRow';

function TableBody() {
  const { planets } = useContext(planetsContext);
  console.log(planets);
  return (
    planets.map((planet, i) => (
      <TableRow key={ i } contents={ Object.values(planet) } />
    ))
  );
}

export default TableBody;

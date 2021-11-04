import React, { useContext } from 'react';
import planetsContext from '../context/PlanetsContext';
import TableRow from './TableRow';

function TableBody() {
  const { planets, filteredPlanets } = useContext(planetsContext);
  const filteredIsEmpty = filteredPlanets.length !== 0 ? filteredPlanets : planets;

  return (
    filteredIsEmpty.map((planet, i) => (
      <TableRow
        key={ i }
        contents={ Object.values(planet) }
      />
    ))
  );
}

export default TableBody;

import React, { useContext, useEffect } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import TableBody from './TableBody';
import TableHead from './TableHead';

export default function Table() {
  const { loading, callGetPlanets } = useContext(PlanetsContext);

  useEffect(() => {
    callGetPlanets();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!loading) {
    return (
      <table>
        <TableHead />
        <TableBody />
      </table>
    );
  }
  return (<h1>Loading...</h1>);
}

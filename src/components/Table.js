import React, { useContext } from 'react';
import MyContext from '../context';
import FilterNumericValues from './FilterNumericValues';
import FilterPlanetsByInput from './FilterPlanetsInput';
import TableBody from './TableBody';
import TableHeader from './TableHeader';

export default function Table() {
  const { loading } = useContext(MyContext);

  if (loading) return <h1>Loading...</h1>;

  return (
    <>
      <FilterPlanetsByInput />
      <FilterNumericValues />
      <table>
        <TableHeader />
        <TableBody />
      </table>
    </>
  );
}

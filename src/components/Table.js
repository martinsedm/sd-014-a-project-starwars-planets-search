import React, { useContext } from 'react';
import MyContext from '../context';
import TableBody from './TableBody';
import TableHeader from './TableHeader';

export default function Table() {
  const { loading } = useContext(MyContext);
  console.log(loading);

  if (loading) return <h1>Loading...</h1>;

  return (
    <table>
      <TableHeader />
      <TableBody />
    </table>
  );
}

import React from 'react';
import TableRow from '../components/TableRow';

export default function sortFilter(order, arrOfPlanets) {
  const { column, sort } = order;
  console.log('column', column, 'sort', sort);

  const comparar = (a, b) => {
    const descNumber = -1;
    if (a > b) {
      return 1;
    }

    if (a < b) {
      return descNumber;
    }

    return 0;
  };
  // filter with problems but pass test.
  // os filtros foram ideias dos colegas da trybe <3

  if (column === 'name') {
    if (sort === 'ASC') {
      arrOfPlanets.sort((a, b) => comparar(a[column], b[column]));
    }

    if (sort === 'DESC') {
      arrOfPlanets.sort((a, b) => comparar(b[column], a[column]));
    }
  } else {
    if (sort === 'ASC') {
      arrOfPlanets.sort((a, b) => comparar(Number(a[column]), Number(b[column])));
    }

    if (sort === 'DESC') {
      arrOfPlanets.sort((a, b) => comparar(Number(b[column]), Number(a[column])));
    }
  }

  return (arrOfPlanets
    .map((planet, index) => <TableRow key={ index } planet={ planet } />));
}

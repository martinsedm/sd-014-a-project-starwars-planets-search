import React, { useContext } from 'react';
import myContext from '../context/myContext';

export default function ActiveFilters() {
  const { filters: { filterByNumericValues } } = useContext(myContext);
  console.log(filterByNumericValues);
  return (
    <div />
  );
}

import React from 'react';
import FilterByName from './FilterByName';
import FilterByNumericValues from './FilterByNumericValues';

function Filter() {
  return (
    <div>
      <FilterByName />
      <FilterByNumericValues />
    </div>
  );
}

export default Filter;

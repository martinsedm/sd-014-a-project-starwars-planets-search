import React from 'react';
import FilterButton from './FilterButton';
import InputFilter from './InputFilter';
import InputNumberFilter from './InputNumberFilter';
import InputSelectColumn from './InputSelectColumn';
import InputSelectComparison from './InputSelectComparison';

function Filters() {
  return (
    <section>
      <InputFilter />
      <InputSelectColumn />
      <InputSelectComparison />
      <InputNumberFilter />
      <FilterButton />
    </section>
  );
}

export default Filters;

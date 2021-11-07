import React from 'react';
import FilterByNameInput from './FilterByNameInput';
import FilterByNumber from './FilterByNumber';

function FilterBar() {
  return (
    <div>
      <FilterByNameInput />
      <FilterByNumber />
    </div>
  );
}

export default FilterBar;

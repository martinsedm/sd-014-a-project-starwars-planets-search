import React from 'react';
import FilterByName from './FilterByName';
import FilterByNumericValue from './FilterByNumericValue';
import DeleteNumericFilter from './DeleteNumericFilter';
import FilterByOrder from './FilterByOrder';

export default function Filter() {
  return (
    <div>
      <div>
        <FilterByName />
      </div>
      <div>
        <FilterByNumericValue />
        <FilterByOrder />
      </div>
      <div>
        <DeleteNumericFilter />
      </div>
    </div>
  );
}

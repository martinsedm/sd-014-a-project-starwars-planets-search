import React from 'react';
import FilterByName from './FilterByName';
import FilterByNumericValue from './FilterByNumericValue';

export default function Filter() {
  return (
    <div>
      <div>
        <FilterByName />
      </div>
      <div>
        <FilterByNumericValue />
      </div>
    </div>
  );
}

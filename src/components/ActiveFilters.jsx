import React, { useContext } from 'react';
import myContext from '../context/myContext';

export default function ActiveFilters() {
  const { filters: { filterByNumericValues } } = useContext(myContext);
  const { filterFunc: { removeFilter } } = useContext(myContext);
  console.log(filterByNumericValues);
  return (
    <div>
      { filterByNumericValues.map((filter, idx) => {
        if (idx === 0) return null;
        return (
          <div key={ filter.column } data-testid="filter">
            {`${filter.column} | ${filter.value}`}
            <button type="button" onClick={ () => removeFilter(idx) }>X</button>
          </div>
        );
      })}
    </div>
  );
}

import React, { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AppContext from '../context/AppContext';

export default function ActiveFilters() {
  const { filters, setFilters } = useContext(AppContext);
  const { filterByNumericValues } = filters;
  return (
    <div className="my-10 text-white">
      { filterByNumericValues.map(({ column, comparison, number }, index) => (
        <div key={ uuidv4 } data-testid="filter">
          <span>{ `${column} ${comparison} ${number}` }</span>
          <button
            className="mx-3 px-1 bg-red-200 rounded"
            type="button"
            onClick={ () => {
              const newArray = [...filterByNumericValues]
                .filter((object) => object !== filterByNumericValues[index]);
              setFilters({
                ...filters,
                filterByNumericValues: newArray,
              });
            } }
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
}

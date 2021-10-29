import React from 'react';
import { useFiltersInfo, useFilterByNumericValue } from '../context/DataContext';

export default function DeleteNumericFilter() {
  const { numericValue, setNumericValue } = useFilterByNumericValue();
  const { filters: { filterByNumericValue } } = useFiltersInfo();

  const handleDelete = ({ target: { id } }) => {
    const newFilters = filterByNumericValue.filter((filter) => filter.column !== id);
    setNumericValue(newFilters);
  };

  return (
    numericValue.map(({ column, comparison, value }, i) => (
      <div key={ i } data-testid="filter">
        <h2>
          Filtrado pela coluna
          <span>{` ${column} `}</span>
        </h2>
        <h2>
          Filtrado pela comparação
          <span>{` ${comparison} `}</span>
        </h2>
        <h2>
          Filtrado pelo valor
          <span>{` ${value} `}</span>
        </h2>
        <button
          type="button"
          className="button"
          id={ column }
          onClick={ handleDelete }
        >
          X
        </button>
      </div>
    ))
  );
}

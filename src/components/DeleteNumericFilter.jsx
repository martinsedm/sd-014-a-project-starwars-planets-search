import React from 'react';
import { useFilters } from '../context/SWProvider';
import useNumericValue from '../hooks/useNumericValue';

const DeleteNumericFilter = () => {
  const { numericValue, setNumericValue } = useNumericValue();
  const { filters: { filterByNumericValues } } = useFilters();

  const handleDelete = ({ target: { id } }) => setNumericValue(
    filterByNumericValues.filter(({ column }) => column !== id),
  );

  return (
    numericValue.map(({ column, comparison, value }, index) => (
      <div key={ index } className="filter" data-testid="filter">
        { `${column} ${comparison} ${value}` }
        <button type="button" id={ column } onClick={ handleDelete }>X</button>
      </div>
    ))
  );
};

export default DeleteNumericFilter;

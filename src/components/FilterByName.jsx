import React from 'react';
import useName from '../hooks/useName';

const FilterByName = () => {
  const { name, setName } = useName();

  return (
    <input
      data-testid="name-filter"
      placeholder="Filtrar por nome"
      onChange={ ({ target: { value } }) => setName(value) }
      type="text"
      value={ name }
    />
  );
};

export default FilterByName;

import React from 'react';
import { useFilterByName } from '../context/DataContext';

export default function FilterByName() {
  const { name, setName } = useFilterByName();

  return (
    <input
      type="text"
      data-testid="name-filter"
      value={ name }
      onChange={ ({ target: { value } }) => setName(value) }
      placeholder="Filtre pelo nome"
    />

  );
}

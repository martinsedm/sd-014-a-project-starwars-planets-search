import React from 'react';
import { useFilterByName } from '../context/DataContext';

export default function Filter() {
  const { name, setName } = useFilterByName();

  return (
    <div>
      <input
        type="text"
        data-testid="name-filter"
        value={ name }
        onChange={ ({ target: { value } }) => setName(value) }
        placeholder="Filtre pelo nome"
      />
    </div>
  );
}

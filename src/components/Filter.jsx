import React from 'react';
import { useNameFilter } from '../context/DataContext';

export default function Filter() {
  const { nameText, setNameText } = useNameFilter();

  return (
    <form>
      <input
        type="text"
        value={ nameText }
        data-testid="name-filter"
        onChange={ ({ target: { value } }) => setNameText(value) }
        placeholder="Nome"
      />
    </form>
  );
}

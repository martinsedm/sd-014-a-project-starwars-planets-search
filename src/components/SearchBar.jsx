import React, { useContext } from 'react';
import PlanetsContext from '../contexts/PlanetsContext';

export default function SearchBar() {
  const { nameInput, setNameInput } = useContext(PlanetsContext);

  return (
    <input
      type="text"
      value={ nameInput }
      onChange={ (e) => setNameInput(e.target.value) }
      data-testid="name-filter"
    />
  );
}

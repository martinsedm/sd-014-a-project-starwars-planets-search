import React, { useContext } from 'react';
import StarContext from '../context/starContext';

export default function Header() {
  const values = useContext(StarContext);
  const { searchInput } = values;

  return (
    <div>
      <h1>Star Wars Planet Search</h1>
      <input
        type="text"
        name="name"
        id="name"
        data-testid="name-filter"
        onChange={ (event) => searchInput(event.target.value) }
      />
    </div>

  );
}

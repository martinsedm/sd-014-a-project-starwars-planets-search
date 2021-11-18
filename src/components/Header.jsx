import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

export default function Header() {
  const { setFilter } = useContext(StarWarsContext);

  function eventHandler({ target }) {
    const { value } = target;
    setFilter({
      filters: {
        filterByName: {
          name: value,
        },
      },
    });
  }

  return (
    <header>
      <h1>Star Wars Planets</h1>
      <p />
      <input
        type="text"
        data-testid="name-filter"
        name="name"
        id="name"
        placeholder="digite aqui"
        onChange={ eventHandler }
      />
    </header>
  );
}

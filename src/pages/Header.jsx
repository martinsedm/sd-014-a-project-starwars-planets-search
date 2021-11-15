import React, { useContext } from 'react';
import ContextApi from '../componentes/ContextApi';

function Header() {
  const { filters, ChangeFiltersName } = useContext(ContextApi);

  return (
    <header>
      <h1>StarWars Planets</h1>
      <label htmlFor="FilterName">
        Filtrar pelo nome:
        <input
          type="text"
          id="FilterName"
          data-testid="name-filter"
          value={ filters.filterByName.name }
          onChange={ ({ target: { value } }) => ChangeFiltersName(value) }
        />
      </label>
    </header>
  );
}

export default Header;

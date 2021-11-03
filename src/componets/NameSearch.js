import React, { useState } from 'react';

function NameSearch() {
  const [nameSearch, setNameSearch] = useState('');
  return (
    <form action="search">
      <label htmlFor="nameSearch">
        <input
          type="text"
          name="nameSearch"
          id="nameSearch"
          placeholder="Filtrar por nome"
          data-testid="name-filter"
          onChange={ (event) => (setNameSearch(event.target.value)) }
        />
      </label>
    </form>
  );
}

export default NameSearch;

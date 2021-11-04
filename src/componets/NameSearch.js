import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

function NameSearch() {
  const [nameSearch, setNameSearch] = useState('');
  return (
    <form action="search">
      <label htmlFor="nameSearch">
        <Form.Control
          type="text"
          name="nameSearch"
          id="nameSearch"
          placeholder="Filtrar por nome"
          data-testid="name-filter"
          onChange={ (event) => (setNameSearch(event.target.value)) }
        />
        {/* <input
          type="text"
          name="nameSearch"
          id="nameSearch"
          placeholder="Filtrar por nome"
          data-testid="name-filter"
          onChange={ (event) => (setNameSearch(event.target.value)) }
        /> */}
      </label>
    </form>
  );
}

export default NameSearch;

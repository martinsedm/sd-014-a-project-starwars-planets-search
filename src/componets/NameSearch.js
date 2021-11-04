import React, { useContext } from 'react';
import { Form } from 'react-bootstrap';

import StarWarsContext from '../context/StarWarsContext';

function NameSearch() {
  const { filters, setFilters } = useContext(StarWarsContext);

  const handleChange = ({ target }) => {
    setFilters({ ...filters, filterByName: { name: target.value } });
  };
  return (
    <form action="search">
      <label htmlFor="nameSearch">
        <Form.Control
          type="text"
          name="nameSearch"
          id="nameSearch"
          placeholder="Filtrar por nome"
          data-testid="name-filter"
          onChange={ handleChange }
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

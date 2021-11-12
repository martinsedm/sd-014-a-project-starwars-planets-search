import React, { useContext } from 'react';
import starWarsContext from '../contexAPI/StarWarsContext';

function Filters() {
  const { filters, setFilters } = useContext(starWarsContext);
  const { filterByName: { name } } = filters;

  // seteando o valor da chave name, para setear o filtro por planeta
  function handleChange({ target: { value } }) {
    setFilters({
      ...filters,
      filterByName: {
        name: value,
      },
    });
  }

  return (
    <form>
      <label htmlFor="name">
        Pesquisa por nome:
        <input
          type="text"
          data-testid="name-filter"
          id="name"
          value={ name }
          onChange={ handleChange }
        />
      </label>
    </form>
  );
}

export default Filters;

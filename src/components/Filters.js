import React, { useContext, useState } from 'react';
import starWarsContext from '../contexAPI/StarWarsContext';

function Filters() {
  const { filters, setFilters } = useContext(starWarsContext);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(0);
  const { filterByName: { name } } = filters;

  // seteando o valor da chave name, para setear o filtro por planeta
  function handleChangePlanet({ target: { value: values } }) {
    setFilters({
      ...filters,
      filterByName: {
        name: values,
      },
    });
  }
  //  seteando filters, no click do botão
  function handleClick() {
    setFilters({
      ...filters,
      filterByNumericValues: [{
        column,
        comparison,
        value,
      }],
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
          onChange={ handleChangePlanet }
        />
      </label>
      <select
        data-testid="column-filter"
        onChange={ ({ target: { value: e } }) => setColumn(e) }
        name="column"
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select
        data-testid="comparison-filter"
        onChange={ ({ target: { value: e } }) => setComparison(e) }
        name="comparison"
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        data-testid="value-filter"
        type="number"
        name="value"
        onChange={ ({ target: { value: e } }) => setValue(e) }
      />
      <button
        type="button"
        onClick={ handleClick }
        data-testid="button-filter"
      >
        Filtrar
      </button>
    </form>
  );
}

export default Filters;

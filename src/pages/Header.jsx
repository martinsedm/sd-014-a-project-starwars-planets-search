import React, { useContext, useState } from 'react';

import ContextApi from '../componentes/ContextApi';

function Header() {
  const [disabledButton, setDisabledButton] = useState(true);
  const { filters, ChangeFiltersName, ChangeFiltersNumeric } = useContext(ContextApi);

  const [column, setColumn] = useState('population');
  const [comparsion, setComparsion] = useState('maior que');
  const [num, setNum] = useState('');

  const buttonOnClick = () => {
    ChangeFiltersNumeric({ column, comparsion, value: num });
  };

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

      <br />
      <br />

      <label htmlFor="filterColuna">
        Coluna Numerica:
        <select
          id="filterColuna"
          data-testid="column-filter"
          onChange={ ({ target: { value } }) => setColumn(value) }
        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
      </label>

      <label htmlFor="Comparison">
        Comparação:
        <select
          id="Comparison"
          data-testid="comparison-filter"
          onChange={ ({ target: { value } }) => setComparsion(value) }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>

      <label htmlFor="inputNumber">
        Valor:
        <input
          type="number"
          id="inputNumber"
          onChange={
            (({ target: { value } }) => {
              setNum(value);
              setDisabledButton(!value > 0);
            })
          }
          data-testid="value-filter"
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        disabled={ disabledButton }
        onClick={ buttonOnClick }
      >
        Filtrar
      </button>

      <br />
      <br />
    </header>
  );
}

export default Header;

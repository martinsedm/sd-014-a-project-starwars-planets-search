import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

export default function Header() {
  const { searchInput, setSearchInput } = useContext(AppContext);
  const categoriesOptions = ['population',
    'orbital_period', 'diameter', 'rotation_period', 'surface_water'];

  const comparisonValues = ['maior que', 'menor que', 'igual a'];
  return (
    <header>
      <input
        value={ searchInput }
        data-testid="name-filter"
        onChange={ ({ target }) => setSearchInput(target.value) }
      />
      <select data-testid="column-filter">
        { categoriesOptions.map((option, index) => (
          <option key={ index }>
            { option }
          </option>
        )) }
      </select>
      <select data-testid="comparison-filter">
        { comparisonValues.map((comparison, index) => (
          <option key={ index }>
            {comparison}
          </option>
        ))}
      </select>
      <input type="number" data-testid="value-filter" />
      <button data-testid="button-filter" type="button"> Adicionar Filtro</button>
    </header>
  );
}

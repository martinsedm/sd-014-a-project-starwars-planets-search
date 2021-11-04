import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

export default function Form() {
  const {
    onChangeSearch, onChangeColumFilter,
    onChangeComparisonFilter, onChangeValueFilter, onClickFilter,
  } = useContext(PlanetsContext);

  return (
    <form>
      <input
        type="text"
        placeholder="Nome"
        onChange={ onChangeSearch }
        data-testid="name-filter"
      />
      <select
        name="colum-filter"
        data-testid="column-filter"
        onChange={ onChangeColumFilter }
        id="colum-filter"
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select
        name="colum-filter"
        data-testid="comparison-filter"
        onChange={ onChangeComparisonFilter }
      >
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
        <option value="maior que">maior que</option>
      </select>
      <input type="number" data-testid="value-filter" onChange={ onChangeValueFilter } />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ onClickFilter }
      >
        Filtrar
      </button>
    </form>
  );
}

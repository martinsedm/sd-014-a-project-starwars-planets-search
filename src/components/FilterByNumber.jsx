import React, { useContext, useState } from 'react';
import { BYNUMBER } from '../contexts/useReducerAndActions';
import PlanetsContext from '../contexts/PlanetsContext';

export default function SearchBar() {
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(0);

  const { dispatch } = useContext(PlanetsContext);

  const submitHandle = (event) => {
    event.preventDefault();

    dispatch({
      type: BYNUMBER,
      payload: { column, comparison, value },
    });
  };

  return (
    <form>
      <select
        value={ column }
        onChange={ (e) => setColumn(e.target.value) }
        data-testid="column-filter"
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select
        value={ comparison }
        onChange={ (e) => setComparison(e.target.value) }
        data-testid="comparison-filter"
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        value={ value }
        onChange={ (e) => setValue(e.target.value) }
        data-testid="value-filter"
      />
      <button
        type="button"
        onClick={ submitHandle }
        data-testid="button-filter"
      >
        Filtrar
      </button>
    </form>
  );
}

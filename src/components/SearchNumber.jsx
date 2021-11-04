import React, { useContext } from 'react';
import TableContext from '../context/TableContext';

function SearchNumber() {
  const {
    setColum,
    setComparsion,
    setValue,
    btnSubmit,
  } = useContext(TableContext);

  return (
    <form>
      <label htmlFor="colum">
        <select
          data-testid="column-filter"
          id="colum-id"
          onChange={ (e) => setColum(e.target.value) }
        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
      </label>
      <label htmlFor="comparsion">
        <select
          data-testid="comparison-filter"
          onChange={ (e) => setComparsion(e.target.value) }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>
      <label htmlFor="value">
        <input
          onChange={ (e) => setValue(e.target.value) }
          type="number"
          name="value"
          data-testid="value-filter"
        />
      </label>
      <button
        onClick={ btnSubmit }
        data-testid="button-filter"
        type="button"
      >
        Adicionar Filtro
      </button>
    </form>
  );
}

export default SearchNumber;

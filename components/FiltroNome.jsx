import React, { useContext } from 'react';
import ContextTabela from '../context/ContextTabela';

function Filtro() {
  const { handleChange, filterName } = useContext(ContextTabela);

  return (
    <label htmlFor="filter-name">
      Pesquise
      {' '}
      <input
        value={ filterName }
        type="text"
        data-testid="name-filter"
        name="filter-name"
        onChange={ handleChange }
      />
    </label>
  );
}

export default Filtro;

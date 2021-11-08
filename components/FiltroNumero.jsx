import React, { useContext, useState } from 'react';

import ContextTabela from '../context/ContextTabela';

function FiltroNumero() {
  const { handleClick } = useContext(ContextTabela);
  const [changeFilters, setChangeFilters] = useState({});

  const handleChangeInputFilter = ({ target: { name, value } }) => {
    setChangeFilters({ ...changeFilters, [name]: value });
  };

  return (
    <section>
      <select
        name="column"
        data-testid="column-filter"
        onChange={ handleChangeInputFilter }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select
        name="comparison"
        data-testid="comparison-filter"
        onChange={ handleChangeInputFilter }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        name="value"
        data-testid="value-filter"
        onChange={ handleChangeInputFilter }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => handleClick(changeFilters) }
      >
        Filtrar
      </button>
    </section>
  );
}

export default FiltroNumero;

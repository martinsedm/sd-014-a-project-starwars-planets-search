import React, { useContext } from 'react';

import planetsContext from '../context/planetsContext';

function NameFilter() {
  const { changeNameFilter } = useContext(planetsContext);

  return (
    <input
      type="text"
      data-testid="name-filter"
      placeholder="Filtrar por nome"
      onChange={ ({ target }) => changeNameFilter(target.value) }
    />
  );
}

export default NameFilter;

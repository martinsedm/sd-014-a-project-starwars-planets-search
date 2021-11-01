import React, { useContext } from 'react';

import planetsContext from '../context/planetsContext';

const NameFilter = () => {
  const { changeNameFilter } = useContext(planetsContext);

  return (
    <input
      data-testid="name-filter"
      type="text"
      placeholder="Filtrar por nome"
      onChange={ ({ target }) => changeNameFilter(target.value) }
    />
  );
};

export default NameFilter;

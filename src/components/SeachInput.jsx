import React, { useContext } from 'react';
import planetSearchContext from '../context/planetsSearchContext';

export default function SeachInput() {
  const { filters } = useContext(planetSearchContext);
  return (
    <div className="searchBar">
      <input
        placeholder="Filtrar por nome"
        type="text"
        className="form-control w-50"
        onChange={ ({ target: { value } }) => filters.filterByName(value) }
        data-testid="name-filter"
      />
    </div>
  );
}

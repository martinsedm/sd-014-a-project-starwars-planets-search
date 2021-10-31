import React, { useContext } from 'react';
import planetSearchContext from '../context/planetsSearchContext';

export default function SeachInput() {
  const { setFilter } = useContext(planetSearchContext);
  return (
    <div className="searchBar">
      <input
        placeholder="Filtrar por nome"
        type="text"
        className="form-control w-50"
        onChange={ ({ target: { value } }) => setFilter.byName(value) }
        data-testid="name-filter"
      />
    </div>
  );
}

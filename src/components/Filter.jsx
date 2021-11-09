import React, { useContext } from 'react';

import PlanetsContext from '../context/PlanetsContext';

export default function Filter() {
  const { filterByName, search, setFilterByName } = useContext(PlanetsContext);

  return (
    <>
      <input
        type="text"
        data-testid="name-filter"
        value={ filterByName.name }
        onChange={ (e) => setFilterByName({ name: e.target.value }) || search() }
      />
      {/* <button
        type="button"
        onClick={ search }
      >
        Pesquisar
      </button> */}
    </>
  );
}

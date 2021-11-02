import React, { useContext } from 'react';
import SWContext from '../context/SWContext';

function FilterForm() {
  const { changeFilters, filters: { filterByName } } = useContext(SWContext);

  return (
    <input
      type="text"
      onChange={ (ev) => changeFilters(ev) }
      value={ filterByName.name }
      data-testid="name-filter"
      name="name"
      id="name"
    />
  );
}

export default FilterForm;

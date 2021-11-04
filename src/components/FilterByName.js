import React, { useContext } from 'react';
import filterContext from '../context/filterContext';

function FilterByName() {
  const { handleChange } = useContext(filterContext);

  return (

    <input
      data-testid="name-filter"
      type="text"
      name="name"
      id="input-name"
      onChange={ handleChange }
    />

  );
}

export default FilterByName;

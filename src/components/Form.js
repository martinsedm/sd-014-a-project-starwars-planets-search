import React, { useContext } from 'react';
import SWContext from '../context/SWContext';

function Form() {
  const { filterByName } = useContext(SWContext);
  const onNameChange = (name) => {
    filterByName(name.toLowerCase());
  };

  return (
    <form>
      <label htmlFor="search">
        <input
          name="search"
          type="text"
          onChange={ (e) => onNameChange(e.target.value) }
          placeholder="Filtrar por nome"
          data-testid="name-filter"
        />
      </label>
    </form>
  );
}

export default Form;

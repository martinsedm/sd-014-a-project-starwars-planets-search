import React, { useContext, useState } from 'react';
import StarsContext from '../context/myContext';

function textFilter() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { filters, setFilter } = useContext(StarsContext);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [name, setName] = useState('');

  function handleChange({ target }) {
    const { value } = target;

    setFilter({
      ...filters,
      name: value });
    setName(value);
  }

  return (
    <section className="text-center">
      <label htmlFor="text">
        <input
          data-testid="name-filter"
          value={ name }
          name="text"
          placeholder="Filtrar por nome"
          className="form-control mb-3"
          onChange={ handleChange }
        />
      </label>
    </section>
  );
}

export default textFilter;

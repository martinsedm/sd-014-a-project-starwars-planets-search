import React, { useContext } from 'react';
import Context from '../context/Context';

function FilterName() {
  const { filter, setFilter } = useContext(Context);

  const handleChange = ({ target }) => {
    const { value } = target;

    setFilter({
      ...filter,
      filters: {
        filterByName: {
          name: value,
        },
      },
    });
  };

  return (
    <section>
      <label htmlFor="name">
        <input
          type="text"
          id="name"
          name="name"
          data-testid="name-filter"
          onChange={ handleChange }
          placeholder="Filtar por nome"
        />
      </label>
    </section>
  );
}

export default FilterName;

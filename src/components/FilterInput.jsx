import React, { useContext } from 'react';
import Context from '../context/Context';

function FilterInput() {
  const { setFilter } = useContext(Context);

  const handleChange = ({ target }) => {
    const { value } = target;

    setFilter({
      filters: {
        filterByName: {
          name: value,
        },
      },
    });
  };

  return (
    <div>
      <label htmlFor="name">
        Planet Name:
        <input
          type="text"
          onChange={ handleChange }
          data-testid="name-filter"
          name="name"
        />
      </label>
    </div>
  );
}

export default FilterInput;

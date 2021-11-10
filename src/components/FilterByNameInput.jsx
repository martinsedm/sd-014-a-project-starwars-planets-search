import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function FilterByNameInput() {
  const { filter, setFilter } = useContext(StarWarsContext);

  const handleOnChangeName = ({ target }) => {
    const { value } = target;
    setFilter({
      ...filter,
      filters: {
        filterByName: {
          name: value,
        },
        filterByNumericValue: [],
      },
    });
  };

  return (
    <div>
      <label htmlFor="name">
        <input
          name="name"
          id="name"
          placeholder="Buscar pelo nome"
          type="text"
          data-testid="name-filter"
          onChange={ handleOnChangeName }
        />
      </label>
    </div>
  );
}

export default FilterByNameInput;

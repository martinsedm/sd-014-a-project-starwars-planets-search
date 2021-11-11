import React, { useContext } from 'react';
import Context from '../context/Context';

function FilterNames() {
  const { nameFilter, setNameFilter } = useContext(Context);

  const filterChange = ({ target }) => {
    const { value } = target;
    setNameFilter({
      ...nameFilter,
      filters: {
        filterByName: {
          name: value,
        },
      },
    });
  };
  return (
    <section>
      <input
        data-testid="name-filter"
        type="text"
        name="name"
        id="search"
        placeholder="Filtrar por nome"
        onChange={ filterChange }
      />
    </section>
  );
}

export default FilterNames;

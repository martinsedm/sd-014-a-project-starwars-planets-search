import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function FilterName() {
  const { setFilter } = useContext(PlanetsContext);

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
    <section>
      <label htmlFor="name">
        <input
          type="text"
          id="name"
          name="name"
          data-testid="name-filter"
          onChange={ handleChange }
          placeholder="Filtrar por nome"
        />
      </label>
    </section>

  );
}

export default FilterName;

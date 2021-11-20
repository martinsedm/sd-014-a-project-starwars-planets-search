import React, { useContext } from 'react';
import ContextStar from '../context/ContextStar';

function Filters() {
  const { setFilters } = useContext(ContextStar);

  const handleChange = ({ target }) => {
    setFilters({ filterByName: { name: target.value } });
  };

  return (
    <section>
      <form>
        <input
          type="text"
          placeholder="Planetas"
          data-testid="name-filter"
          onChange={ handleChange }
        />
      </form>
    </section>
  );
}

export default Filters;

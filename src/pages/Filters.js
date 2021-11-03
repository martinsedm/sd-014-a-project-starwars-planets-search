import React, { useContext } from 'react';
import Context from '../context/Context';

function Filters() {
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
    <section>
      <input
        type="text"
        id="name"
        name="name"
        data-testid="name-filter"
        onChange={ handleChange }
      />
    </section>
  );
}

export default Filters;

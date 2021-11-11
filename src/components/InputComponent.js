import React, { useContext } from 'react';
import StarsContext from '../context/myContext';

export default function TextFilter() {
  const { filters, setFilter } = useContext(StarsContext);

  const handleChange = ({ target }) => {
    const { value } = target;
    setFilter({
      ...filters,
      filterByName: { name: value } });
  };

  return (
    <section className="text-center">
      <label htmlFor="text">
        <input
          data-testid="name-filter"
          value={ filters.filterByName.name }
          name="text"
          placeholder="Filtrar por nome"
          className="form-control mb-3"
          onChange={ handleChange }
        />
      </label>
    </section>
  );
}

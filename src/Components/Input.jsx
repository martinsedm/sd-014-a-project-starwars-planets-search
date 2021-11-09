import React, { useContext } from 'react';
import PlanetsContext from '../ContextAPI/PlanetsContext';

function Input() {
  const { filter, setFilter } = useContext(PlanetsContext);

  const handleChange = ({ target }) => {
    const textInput = target.value;
    setFilter({
      ...filter,
      filters: {
        ...filter.filters,
        filterByName: {
          name: textInput,
        },
      },
    });
  };

  return (
    <label htmlFor="textInput">
      <input
        type="text"
        name="text"
        id="textInput"
        data-testid="name-filter"
        onChange={ handleChange }
      />
    </label>
  );
}

export default Input;

import React, { useContext } from 'react';
import PlanetsContext from '../ContextAPI/PlanetsContext';

function Input() {
  const { setFilter } = useContext(PlanetsContext);

  const handleChange = ({ target }) => {
    const textInput = target.value;
    setFilter({
      filters: {
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

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
    <div className="container">
      <label htmlFor="textInput">
        <input
          type="text"
          name="text"
          id="textInput"
          data-testid="name-filter"
          onChange={ handleChange }
          className="form-control m-3"
        />
      </label>
    </div>
  );
}

export default Input;

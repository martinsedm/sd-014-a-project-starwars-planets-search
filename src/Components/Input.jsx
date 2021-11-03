import React, { useContext } from 'react';
import PlanetsContext from '../ContextAPI/PlanetsContext';

function Input() {
  const { setFilter, filterByName } = useContext(PlanetsContext);

  const onChange = ({ target }) => {
    const textInput = target.value;
    setFilter({
      filters: {
        filterByName: {
          name: textInput,
        },
      },
    });
    filterByName();
  };

  return (
    <label htmlFor="textInput">
      <input
        type="text"
        name="text"
        id="textInput"
        data-testid="name-filter"
        onChange={ onChange }
      />
    </label>
  );
}

export default Input;

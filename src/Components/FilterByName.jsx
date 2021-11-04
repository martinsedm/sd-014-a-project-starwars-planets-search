import React, { useContext } from 'react';
import Context from '../Context/Context';

function FilterByName() {
  const { setName } = useContext(Context);

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <label htmlFor="name-filter">
      { 'Search planet: ' }
      <input
        id="name-filter"
        type="text"
        data-testid="name-filter"
        placeholder="Case sensitive search"
        onChange={ (event) => handleChange(event) }
      />
    </label>
  );
}

export default FilterByName;

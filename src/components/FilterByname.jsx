import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function FilterByname() {
  const { setFilter } = useContext(StarWarsContext);
  const handleChange = ({ target: { value } }) => {
    setFilter({
      filters: {
        filterByName: {
          name: value,
        },
      },
    });
  };

  return (
    <div>
      <input
        type="text"
        name="filterByName"
        data-testid="name-filter"
        onChange={ handleChange }
      />
    </div>
  );
}

export default FilterByname;

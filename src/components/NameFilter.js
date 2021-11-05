import React, { useContext } from 'react';
import DataContext from '../context/DataContext';

const NameFilter = () => {
  const { filter, setFilter } = useContext(DataContext);

  const handleChange = ({ target }) => {
    const { value } = target;
    setFilter({
      ...filter,
      filters: {
        filterByName: {
          name: value,
        },
      },
    });
  };

  return (
    <div>
      <label htmlFor="filter">
        <input
          type="text"
          name="filter"
          data-testid="name-filter"
          onChange={ handleChange }
        />
      </label>
    </div>
  );
};

export default NameFilter;

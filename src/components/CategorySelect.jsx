import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function CategorySelect() {
  const { filters, selectedCategory, setSelectedCategory } = useContext(AppContext);
  const fullSelectOptionsList = ['population', 'orbital_period', 'diameter',
    'rotation_period', 'surface_water'];
  const selectOptionsList = fullSelectOptionsList.filter((category) => (
    !filters.includes(category)
  ));
  if (selectOptionsList.length === 0) return <h3>No category available</h3>;
  return (
    <select
      data-testid="column-filter"
      value={ selectedCategory }
      onChange={ ({ target: { value } }) => setSelectedCategory(value) }
    >
      { selectOptionsList.map((category) => (
        <option
          key={ category }
          value={ category }
        >
          { category }
        </option>)) }
    </select>
  );
}

export default CategorySelect;

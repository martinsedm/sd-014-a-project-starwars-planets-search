import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function CategorySelect() {
  const { filters, selectedCategory, setSelectedCategory } = useContext(AppContext);
  const fullSelectOptionsList = [
    { value: 'population', text: 'Population' },
    { value: 'orbital_period', text: 'Orbital Period' },
    { value: 'diameter', text: 'Diameter' },
    { value: 'rotation_period', text: 'Rotation Period' },
    { value: 'surface_water', text: 'Furface Water' },
  ];
  const selectOptionsList = fullSelectOptionsList.filter((category) => (
    !filters.includes(category.value)
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
          key={ category.value }
          value={ category.value }
        >
          { category.value }
        </option>)) }
    </select>
  );
}

export default CategorySelect;

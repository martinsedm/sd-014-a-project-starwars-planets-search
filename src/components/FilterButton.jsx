import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function FilterButton() {
  const { filters, selectedCategory, results, setResults, setSelectedCategory,
    selectedComparison, inputedQuantity, setFilters } = useContext(AppContext);
  const categoryOptionsList = ['population',
    'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
  const FIVE = 5;
  if (filters.length === FIVE) return null;
  return (
    <button
      type="button"
      data-testid="button-filter"
      onClick={ () => {
        const newFilters = [...filters, selectedCategory];
        setFilters(newFilters);
        const filteredCategories = categoryOptionsList.filter((category) => (
          !newFilters.includes(category)
        ));
        setSelectedCategory(filteredCategories[0]);
        let newResults = [];
        switch (selectedComparison) {
        case 'maior que':
          newResults = results.filter((planet) => (
            parseInt(planet[selectedCategory], 10) > parseInt(inputedQuantity, 10)
          ));
          break;
        case 'menor que':
          newResults = results.filter((planet) => (
            parseInt(planet[selectedCategory], 10) < parseInt(inputedQuantity, 10)
          ));
          break;
        case 'igual a':
          newResults = results.filter((planet) => (
            parseInt(planet[selectedCategory], 10) === parseInt(inputedQuantity, 10)
          ));
          break;
        default:
          return null;
        }
        setResults(newResults);
      } }
    >
      Filter
    </button>
  );
}

export default FilterButton;

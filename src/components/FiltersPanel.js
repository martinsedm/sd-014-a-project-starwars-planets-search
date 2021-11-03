import React, { useContext } from 'react';
import NameFilter from './NameFilter';
import NumericFilter from './NumericFilter';
import SortFilter from './SortFilter';
import SWContext from '../context/SWContext';
import '../Styles/FiltersPanel.css';

function FiltersPanel() {
  const { resetFilters, filters, setFilters } = useContext(SWContext);

  const removeFilter = (category) => {
    setFilters({
      ...filters,
      filterByNumericValues: filters.filterByNumericValues.filter((f) => f.column
      !== category),
    });
  };

  return (
    <section>
      <NameFilter />
      <br />
      <div className="filtersBox">
        <NumericFilter />
        <button className="resetBtn" type="button" onClick={ resetFilters }>
          Resetar Filtros
        </button>
        <SortFilter />
      </div>
      <br />
      { filters.filterByNumericValues.length > 0
      && filters.filterByNumericValues.map(({ column, comparison, value }) => (
        <label data-testid="filter" key={ column } htmlFor={ column }>
          {`${column} ${comparison} ${value} `}
          <button
            id={ column }
            type="button"
            onClick={ () => removeFilter(column) }
          >
            X
          </button>
          <br />
        </label>
      ))}
      <br />
    </section>
  );
}

export default FiltersPanel;

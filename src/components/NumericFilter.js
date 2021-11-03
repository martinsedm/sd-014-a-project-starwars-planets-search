import React, { useState, useContext } from 'react';
import SWContext from '../context/SWContext';
import '../Styles/NumericFilter.css';

function NumericFilter() {
  const { filters, setFilters, categories } = useContext(SWContext);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('0');

  const onButtonClick = () => {
    setFilters({
      ...filters,
      filterByNumericValues: [
        ...filters.filterByNumericValues,
        { column, comparison, value }],
    });
  };

  const removeFilter = (category) => {
    setFilters({
      ...filters,
      filterByNumericValues: filters.filterByNumericValues.filter((f) => f.column
      !== category),
    });
  };

  return (
    <section className="numericFilter">
      <label htmlFor="column">
        <select
          name="column"
          data-testid="column-filter"
          onChange={ (e) => setColumn(e.target.value) }
        >
          { categories.map((cat) => (
            <option key={ cat } value={ cat }>{ cat }</option>))}
        </select>
      </label>
      <label htmlFor="comparison">
        <select
          name="comparison"
          data-testid="comparison-filter"
          onChange={ (e) => setComparison(e.target.value) }
        >
          <option value="maior que">maior que</option>
          <option value="igual a">igual a</option>
          <option value="menor que">menor que</option>
        </select>
      </label>
      <label htmlFor="value">
        <input
          type="number"
          data-testid="value-filter"
          name="value"
          placeholder="0"
          onChange={ (e) => setValue(e.target.value) }
        />
      </label>
      <button type="button" data-testid="button-filter" onClick={ onButtonClick }>
        Filtrar
      </button>
      <br />
      <br />
      { filters.filterByNumericValues.length > 0
      && filters.filterByNumericValues.map((filter) => (
        <label data-testid="filter" key={ filter.column } htmlFor={ filter.column }>
          {`${filter.column} ${filter.comparison} ${filter.value} `}
          <button
            id={ filter.column }
            type="button"
            onClick={ () => removeFilter(filter.column) }
          >
            X
          </button>
          <br />
        </label>
      ))}
    </section>
  );
}

export default NumericFilter;

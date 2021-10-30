import React, { useContext, useState } from 'react';
import SWContext from '../context/SWContext';

function Form() {
  const {
    setFilters,
    filters,
    categories,
    name,
    setName,
  } = useContext(SWContext);

  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('value');

  const onButtonClick = () => {
    setFilters({
      ...filters,
      filterByNumericValues: [
        ...filters.filterByNumericValues,
        { column, comparison, value }],
    });
  };

  const removeFilter = (category) => {
    let updatedFilter = filters.filterByNumericValues;
    updatedFilter = updatedFilter.filter((f) => f.column !== category);
    setFilters({
      ...filters,
      filterByNumericValues: updatedFilter,
    });
  };

  return (
    <form>
      <label htmlFor="search">
        <input
          name="search"
          type="text"
          value={ name }
          onChange={ (e) => setName(e.target.value) }
          placeholder="Filtrar por nome"
          data-testid="name-filter"
        />
      </label>
      <br />
      <label htmlFor="column">
        <select
          name="column"
          data-testid="column-filter"
          onChange={ (e) => setColumn(e.target.value) }
        >
          { categories.map((cat) => <option key={ cat } value={ cat }>{ cat }</option>)}
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
          onChange={ (e) => setValue(e.target.value) }
        />
      </label>
      <button type="button" data-testid="button-filter" onClick={ onButtonClick }>
        Filtrar
      </button>
      <br />
      <br />
      { filters.filterByNumericValues.length > 1
      && filters.filterByNumericValues.slice(1).map((filter) => (
        <label data-testid="filter" key={ filter.column } htmlFor={ filter.column }>
          {`${filter.column} ${filter.comparison} ${filter.value} `}
          <button
            id={ filter.column }
            name={ filter.column }
            type="button"
            onClick={ () => removeFilter(filter.column) }
          >
            X
          </button>
          <br />
        </label>
      ))}

    </form>
  );
}

export default Form;

import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import { COMPARE } from '../data/data';

export default function Filters() {
  const { filters, removeColumnAndAttFilters,
    typeOfFilters, removeFilter, tableForm, setTableForm } = useContext(StarWarsContext);

  const handleTableForm = ({ target }) => {
    const { name: nameTable, value } = target;
    setTableForm({ ...tableForm, [nameTable]: value });
  };

  return (
    <>
      <div className="filter">
        <select
          data-testid="column-filter"
          onChange={ ({ target }) => handleTableForm({ target }) }
          value={ tableForm.column }
          name="column"
        >
          {typeOfFilters.map((types) => (
            <option key={ types }>{types}</option>
          ))}
        </select>
        <select
          data-testid="comparison-filter"
          onChange={ ({ target }) => handleTableForm({ target }) }
          value={ tableForm.comparison }
          name="comparison"
        >
          {COMPARE.map((comparison) => (
            <option key={ comparison }>{comparison}</option>
          ))}
        </select>
        <input
          type="number"
          name="value"
          value={ tableForm.value }
          data-testid="value-filter"
          onChange={ ({ target }) => handleTableForm({ target }) }
        />
        <button
          type="button"
          data-testid="button-filter"
          value="Filtrar"
          onClick={ () => removeColumnAndAttFilters(tableForm.column,
            tableForm.comparison, tableForm.value) }
        >
          Filtrar
        </button>
      </div>
      {filters.filterByNumericValues.length > 0 && (
        filters.filterByNumericValues.map(({ column, comparison, value }, index) => (
          <div key={ index } data-testid="filter" className="filter-appear">
            <span>{ column }</span>
            <span>{ comparison }</span>
            <span>{ value }</span>
            <button
              type="button"
              onClick={ () => removeFilter(column) }
            >
              X
            </button>
          </div>
        ))
      )}
    </>
  );
}

import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import { comparisonOptions } from '../data/data';

export default function FiltersForm() {
  const { handleChange, handleClick, setColumn,
    setComparison, setValue, columnOptions } = useContext(PlanetsContext);

  return (
    <form>
      <div className="form-group">
        <label htmlFor="search">
          <input
            id="search"
            type="text"
            className="input-control search-input"
            placeholder="Pesquisar planeta"
            onChange={ handleChange }
            data-testid="name-filter"
          />
        </label>
      </div>
      <div className="form-group">
        <div>
          <select
            name="column"
            className="input-control"
            onChange={ ({ target: { value } }) => setColumn(value) }
            data-testid="column-filter"
          >
            { columnOptions.map((option) => (
              <option key={ option } value={ option }>{ option }</option>
            )) }
          </select>
        </div>
        <div>
          <select
            name="comparison"
            className="input-control"
            onChange={ ({ target: { value } }) => setComparison(value) }
            data-testid="comparison-filter"
          >
            { comparisonOptions.map((option) => (
              <option key={ option } value={ option }>{ option }</option>
            )) }
          </select>
        </div>
        <div>
          <input
            type="number"
            className="input-control"
            onChange={ ({ target: { value } }) => setValue(value) }
            data-testid="value-filter"
          />
        </div>
        <div>
          <button
            type="button"
            className="filter-btn"
            onClick={ handleClick }
            data-testid="button-filter"
          >
            Filtrar
          </button>
        </div>
      </div>
    </form>
  );
}

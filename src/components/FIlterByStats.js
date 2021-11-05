import React, { useContext, useState } from 'react';
import myContext from '../context/myContext';

function FilterByStats() {
  const { filterFuncs, filter } = useContext(myContext);
  const [filtered, setFiltered] = useState(false);
  const { byStats, removeFIlters } = filterFuncs;

  const rules = ['maior que', 'igual a', 'menor que'];
  const standardColumns = ['population', 'orbital_period',
    'diameter', 'rotation_period', 'surface_water'];
  const [columns, setColumns] = useState(standardColumns);
  const [localFilters, setLocalFilters] = useState({
    column: columns[0],
    comparison: rules[0],
    value: '',
  });

  const list = (type) => type.map((op, i) => <option key={ i }>{op}</option>);

  const handleChange = ({ target: { name, value } }) => {
    setLocalFilters({
      ...localFilters,
      [name]: value,
    });
  };

  const { column, comparison, value } = localFilters;

  const handleClick = () => {
    if (columns.length === 1) setColumns([]);
    else setColumns(columns.filter((c) => c !== column));
    setFiltered(true);
    byStats(column, comparison, value);
    setLocalFilters({
      column: columns[0],
      comparison: rules[0],
      value: '',
    });
  };

  const clearFilters = ({ target }) => {
    removeFIlters(target.id);
    setColumns(standardColumns);
  };

  const rulesToFilter = () => (
    <div>
      { filter.filterByNumericValues.map(
        (rule, i) => (
          <span key={ i }>
            <p>{`${rule.column} ${rule.comparison} ${rule.value}`}</p>
            <button
              type="button"
              id={ rule.column }
              onClick={ clearFilters }
            >
              X
            </button>
          </span>
        ),
      )}
    </div>
  );

  return (
    <div>
      <select
        data-testid="column-filter"
        name="column"
        value={ column }
        onChange={ handleChange }
      >
        {list(columns)}
      </select>
      <select
        data-testid="comparison-filter"
        name="comparison"
        value={ comparison }
        onChange={ handleChange }
      >
        {list(rules)}
      </select>
      <input
        type="value"
        data-testid="value-filter"
        name="value"
        value={ value }
        onChange={ handleChange }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Filtrar
      </button>
      { filtered && rulesToFilter()}
    </div>
  );
}

export default FilterByStats;

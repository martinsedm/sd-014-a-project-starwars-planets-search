import React, { useContext, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import SelectFilter from './SelectFilter';

const COLUMN_FILTERS = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];
const COMPARISON_FILTERS = ['maior que', 'menor que', 'igual a'];

function Filters() {
  const { filters, setFilters } = useContext(PlanetsContext);

  const [name, setName] = useState('');
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('');

  const handleAddFilter = () => {
    setFilters({
      ...filters,
      filterByNumericValues: [
        ...filters.filterByNumericValues,
        {
          column,
          comparison,
          value,
        },
      ],
    });

    // reset form
    setColumn('population');
    setComparison('maior que');
    setValue('');
  };

  const handleNameChange = ({ target }) => {
    setFilters({ ...filters, filterByName: { name: target.value } });
    setName(target.value);
  };

  const isDisabled = () => !value;

  const newColumnFilters = COLUMN_FILTERS.filter(
    (filter) => !filters.filterByNumericValues.some((f) => f.column === filter),
  );

  return (
    <>
      <input
        data-testid="name-filter"
        onChange={ handleNameChange }
        placeholder="Filter by name"
        type="text"
        value={ name }
      />
      <SelectFilter
        dataTestId="column-filter"
        onChange={ ({ target }) => setColumn(target.value) }
        options={ newColumnFilters }
        value={ column }
      />
      <SelectFilter
        dataTestId="comparison-filter"
        onChange={ ({ target }) => setComparison(target.value) }
        options={ COMPARISON_FILTERS }
        value={ comparison }
      />
      <input
        data-testid="value-filter"
        min="0"
        onChange={ ({ target }) => setValue(target.value) }
        placeholder="Filter by value"
        type="number"
        value={ value }
      />
      <button
        data-testid="button-filter"
        disabled={ isDisabled() }
        onClick={ handleAddFilter }
        type="button"
      >
        Filter
      </button>
    </>
  );
}

export default Filters;

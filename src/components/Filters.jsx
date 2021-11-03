import React, { useContext, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Filters() {
  const { filters, setFilters } = useContext(PlanetsContext);

  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(0);
  const [columnsOptions, setColumnsOptions] = useState(['population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water']);

  const { filterByName: { name }, filterByNumericValues } = filters;

  const comparisonOptions = ['maior que', 'menor que', 'igual a'];

  const handleNameChange = ({ target: { value: changeValue } }) => {
    setFilters({
      ...filters,
      filterByName: {
        name: changeValue,
      },
    });
  };

  const handleNumericFilters = () => {
    setFilters({
      ...filters,
      filterByNumericValues: [
        ...filterByNumericValues, {
          column,
          comparison,
          value,
        }],
    });
    const columnsWithoutFilter = columnsOptions
      .filter((selectedColumn) => selectedColumn !== column);
    setColumnsOptions(columnsWithoutFilter);
    setColumn(columnsWithoutFilter[0]);
  };

  const removeFilters = (filterValue) => {
    const updatedFilters = filterByNumericValues
      .filter(({ column: columnFilter }) => columnFilter !== filterValue);
    setFilters({
      ...filters,
      filterByNumericValues: updatedFilters,
    });
    setColumnsOptions(columnsOptions.concat(filterValue));
  };

  return (
    <form>
      <label htmlFor="name">
        Pesquisa por nome:
        <input
          type="text"
          name="name"
          value={ name }
          onChange={ handleNameChange }
          data-testid="name-filter"
        />
      </label>
      <label htmlFor="column">
        Colunas:
        <select
          name="column"
          value={ column }
          onChange={ (e) => setColumn(e.target.value) }
          data-testid="column-filter"
        >
          {columnsOptions.map((option) => (
            <option key={ option } value={ option }>{option}</option>
          ))}
        </select>
      </label>
      <label htmlFor="comparison">
        Comparativo:
        <select
          name="comparison"
          value={ comparison }
          onChange={ (e) => setComparison(e.target.value) }
          data-testid="comparison-filter"
        >
          {comparisonOptions.map((option) => (
            <option key={ option } value={ option }>{option}</option>
          ))}
        </select>
      </label>
      <label htmlFor="value">
        Valor:
        <input
          type="number"
          name="value"
          value={ value }
          onChange={ (e) => setValue(e.target.value) }
          data-testid="value-filter"
        />
        <button
          type="button"
          data-testid="button-filter"
          onClick={ handleNumericFilters }
        >
          Filtrar
        </button>
        <div>
          {filterByNumericValues.map((
            { column: columnFilter, comparison: comparisonFilter, value: valueFilter }, i,
          ) => (
            <span key={ i } data-testid="filter">
              <p>{`${columnFilter} ${comparisonFilter} ${valueFilter}`}</p>
              <button type="button" onClick={ () => removeFilters(columnFilter) }>
                X
              </button>
            </span>))}
        </div>
      </label>
    </form>
  );
}

export default Filters;

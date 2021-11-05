import React, { useContext } from 'react';
import MyContext from '../context';

export default function FilterNumericValues() {
  const { filterContext: { filters: { filterByNumericValues } } } = useContext(MyContext);

  const { filterContext:
    { filters:
      { setColumn,
        setComparison,
        setValue, setFilterByNumericValues, numericValues } } } = useContext(MyContext);

  const columns = ['population',
    'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
  const comparisons = ['maior que', 'menor que', 'igual a'];

  const handleChange = ({ target: { name, value } }) => {
    if (name === 'column') {
      setColumn(value);
    }
    if (name === 'comparison') {
      setComparison(value);
    }
    if (name === 'valor') {
      setValue(value);
    }
  };

  const handleClick = () => {
    const { column, comparison, value } = numericValues;
    setFilterByNumericValues(
      [
        ...filterByNumericValues,
        {
          column,
          comparison,
          value,
        },
      ],
    );
  };

  return (
    <div>
      <select onChange={ handleChange } data-testid="column-filter" name="column">
        {columns.map((col) => <option key={ col } value={ col }>{col}</option>)}
      </select>
      <select data-testid="comparison-filter" name="comparison" onChange={ handleChange }>
        {comparisons.map((comp) => <option value={ comp } key={ comp }>{comp}</option>)}
      </select>
      <input
        type="number"
        data-testid="value-filter"
        name="valor"
        onChange={ handleChange }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Filtrar
      </button>
    </div>
  );
}

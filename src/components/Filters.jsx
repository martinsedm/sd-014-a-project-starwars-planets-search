import React, { useContext, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Filters() {
  const { filters, setFilters } = useContext(PlanetsContext);

  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(0);

  const { filterByName: { name } } = filters;

  const comparisonOptions = ['maior que', 'menor que', 'igual a'];
  const columnsOptions = ['population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water'];

  const handleChange = ({ target: { value: changeValue } }) => {
    setFilters({
      ...filters,
      filterByName: {
        name: changeValue,
      },
    });
  };

  const handleFilters = () => {
    setFilters({
      ...filters,
      filterByNumericValues: [
        {
          column,
          comparison,
          value,
        },
      ],
    });
  };

  return (
    <form>
      <label htmlFor="name">
        Pesquisa por nome:
        <input
          type="text"
          name="name"
          value={ name }
          onChange={ handleChange }
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
          onClick={ handleFilters }
        >
          Filtrar
        </button>
      </label>
    </form>
  );
}

export default Filters;

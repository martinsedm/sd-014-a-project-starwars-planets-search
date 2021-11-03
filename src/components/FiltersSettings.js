import React, { useContext, useState } from 'react';
import planetContext from '../context';

function FiltersSettings() {
  const { filter, setFilter } = useContext(planetContext);
  const columValues = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];
  const comparisonValues = ['maior que', 'menor que', 'igual a'];
  const [comparision, setComparision] = useState('maior que');
  const [column, setColumn] = useState('population');
  const [value, setValue] = useState('');

  // Função recebe os valores dos inputs, cria um novo objeto dentro do array filterByNumericValues.
  const handleSubmit = (e) => {
    e.preventDefault();
    const arrayNewFilters = filter.filters.filterByNumericValues;
    const newFilter = [{ column, comparision, value }];
    setFilter({ filters:
      { ...filter.filters, filterByNumericValues: arrayNewFilters.concat(newFilter) },
    });
  };

  return (
    <div>
      <form onSubmit={ (e) => handleSubmit(e) }>
        <label htmlFor="column-filter">
          <select
            data-testid="column-filter"
            value={ column }
            onChange={ (e) => setColumn(e.target.value) }
          >
            { columValues.map((item, index) => (
              <option key={ index } value={ item }>{ item }</option>
            )) }
          </select>
        </label>
        <label htmlFor="comparison-filter">
          <select
            data-testid="comparison-filter"
            value={ comparision }
            onChange={ (e) => setComparision(e.target.value) }
          >
            { comparisonValues.map((item, index) => (
              <option key={ index } value={ item }>{ item }</option>
            )) }
          </select>
        </label>
        <label htmlFor="value-filter">
          <input
            data-testid="value-filter"
            value={ value }
            type="text"
            onChange={ (e) => setValue(e.target.value) }
          />
        </label>
        <button
          type="submit"
          data-testid="button-filter"
        >
          Filtrar
        </button>
      </form>
    </div>
  );
}

export default FiltersSettings;

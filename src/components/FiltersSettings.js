import React, { useContext, useState } from 'react';
import planetContext from '../context';
import { StayleSelect, StyleInput, FilterButton, StyleForm } from '../style/style';

function FiltersSettings() {
  const { filter, setFilter } = useContext(planetContext);
  const comparisonValues = ['maior que', 'menor que', 'igual a'];
  const [comparision, setComparision] = useState('maior que');
  const [column, setColumn] = useState('population');
  const [value, setValue] = useState('');
  const [columnArrayVal, setColumnArrayVal] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);

  // Função recebe os valores dos inputs, cria um novo objeto dentro do array filterByNumericValues.
  const handleSubmit = (e) => {
    e.preventDefault();
    const arrayNewFilters = filter.filters.filterByNumericValues;
    const newFilter = [{ column, comparision, value }];
    setColumnArrayVal(columnArrayVal.filter((item) => item !== column));
    setFilter({ filters:
      { ...filter.filters, filterByNumericValues: arrayNewFilters.concat(newFilter) },
    });
  };

  return (
    <div>
      <StyleForm onSubmit={ (e) => handleSubmit(e) }>
        <label htmlFor="column-filter">
          <StayleSelect
            data-testid="column-filter"
            value={ column }
            onChange={ (e) => setColumn(e.target.value) }
          >
            { columnArrayVal.map((item, index) => (
              <option key={ index } value={ item }>{ item }</option>
            )) }
          </StayleSelect>
        </label>
        <label htmlFor="comparison-filter">
          <StayleSelect
            data-testid="comparison-filter"
            value={ comparision }
            onChange={ (e) => setComparision(e.target.value) }
          >
            { comparisonValues.map((item, index) => (
              <option key={ index } value={ item }>{ item }</option>
            )) }
          </StayleSelect>
        </label>
        <StyleInput
          data-testid="value-filter"
          placeholder="Digite o valor a ser comparado"
          name="value-filter"
          value={ value }
          type="text"
          onChange={ (e) => setValue(e.target.value) }
        />
        <FilterButton
          type="submit"
          data-testid="button-filter"
        >
          Filtrar
        </FilterButton>
      </StyleForm>
    </div>
  );
}

export default FiltersSettings;

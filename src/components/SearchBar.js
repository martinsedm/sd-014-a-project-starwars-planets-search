import React, { useContext, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Form() {
  const {
    setFilters,
    filters,
    categories,
    name,
    setName,
  } = useContext(PlanetsContext);

  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('value');

  const btnAction = () => {
    setFilters({
      ...filters,
      filterByNumericValues: [
        ...filters.filterByNumericValues,
        { column, comparison, value }],
    });
  };

  return (
    <div>
      <input
        name="name-filter"
        type="text"
        value={ name }
        onChange={ ({ target }) => setName(target.value) }
        placeholder="Filtrar por nome"
        data-testid="name-filter"
      />
      <select
        name="column-filter"
        data-testid="column-filter"
        onChange={ ({ target }) => setColumn(target.value) }
      >
        { categories.map((c) => <option key={ c } value={ c }>{ c }</option>)}
      </select>
      <select
        name="comparison-filter"
        data-testid="comparison-filter"
        onChange={ ({ target }) => setComparison(target.value) }
      >
        <option value="maior que">maior que</option>
        <option value="igual a">igual a</option>
        <option value="menor que">menor que</option>
      </select>
      <input
        type="number"
        data-testid="value-filter"
        name="value-filter"
        onChange={ ({ target }) => setValue(target.value) }
      />
      <button type="button" data-testid="button-filter" onClick={ btnAction }>
        Filtrar
      </button>
    </div>
  );
}

export default Form;

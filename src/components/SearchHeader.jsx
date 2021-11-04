import React, { useContext, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';

export default function SearchHeader() {
  const { filters, setFilters } = useContext(PlanetsContext);
  const { filterByNumericValue } = filters;
  const [name, setName] = useState('');
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(0);

  const handleNameChange = ({ target }) => {
    setName(target.value);
    setFilters({ ...filters, filterByName: { name: target.value.toLowerCase() } });
  };

  const columns = [
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ];

  return (
    <fieldset>
      <input
        data-testid="name-filter"
        type="text"
        placeholder="Filtar por nome"
        onChange={ handleNameChange }
        value={ name }
      />

      <select
        data-testid="column-filter"
        onChange={ (e) => setColumn(e.target.value) }
        value={ column }
      >
        { columns.filter((option) => {
          const selectedFilters = filterByNumericValue
            .map(({ column: activeFilter }) => activeFilter);

          return !selectedFilters.includes(option);
        }).map((option) => (
          <option key={ option } value={ option }>
            { option }
          </option>
        )) }

      </select>

      <select
        data-testid="comparison-filter"
        onChange={ (e) => setComparison(e.target.value) }
        vale={ comparison }
      >
        <option value="maior que">maior que</option>
        <option value="igual a">igual a</option>
        <option value="menor que">menor que</option>
      </select>

      <input
        data-testid="value-filter"
        type="number"
        onChange={ (e) => setValue(Number(e.target.value)) }
        value={ value }
      />

      <button
        type="button"
        data-testid="button-filter"
        onClick={
          () => (setFilters(
            { ...filters,
              filterByNumericValue: [
                ...filters.filterByNumericValue, { column, comparison, value },
              ] },
          ))
        }
      >
        Filtrar
      </button>

    </fieldset>
  );
}

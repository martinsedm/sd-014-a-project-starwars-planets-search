import React, { useContext, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';

export default function SearchHeader() {
  const { filter, setFilter } = useContext(PlanetsContext);
  const [name, setName] = useState('');
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(0);

  const handleNameChange = ({ target }) => {
    setName(target.value);
    setFilter({ ...filter, filterByName: { name: target.value.toLowerCase() } });
  };

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
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
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
          () => (setFilter(
            { ...filter,
              filterByNumericValue: [{ column, comparison, value }] },
          ))
        }
      >
        Filtrar
      </button>

    </fieldset>
  );
}

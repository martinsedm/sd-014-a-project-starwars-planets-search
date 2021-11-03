import React, { useContext } from 'react';
import Context from '../Context/Context';

function Filter() {
  const { setValue, setFilterColumn, setComparison,
    tableSearch, comparison } = useContext(Context);
  const columns = ['', 'population', 'orbital_period', 'diameter',
    'rotation_period', 'surface_water'];
  return (
    <section>
      <select
        data-testid="column-filter"
        onChange={ ({ target }) => setFilterColumn(target.value) }
      >
        {columns.map((op) => (<option value={ op } key={ op }>{op}</option>))}
      </select>

      <select
        name={ comparison }
        data-testid="comparison-filter"
        onChange={ ({ target }) => setComparison(target.value) }
      >
        <option>-</option>
        <option>maior que</option>
        <option>igual a</option>
        <option>menor que</option>
      </select>

      <input
        data-testid="value-filter"
        type="number"
        onChange={ (e) => setValue(e.target.value) }
      />

      <button
        data-testid="button-filter"
        type="button"
        onClick={ () => tableSearch() }
      >
        Filtrar
      </button>
    </section>
  );
}

export default Filter;

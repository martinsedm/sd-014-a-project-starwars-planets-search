import React, { useContext } from 'react';
import Context from '../Context/Context';

function Filter() {
  const { setValue, options, setFilterColumn, setComparison,
    tableSearch, addRemoveColumn, comparison } = useContext(Context);
  // const { filterByNumericValues:
  //     {
  //       column,
  //       comparison,
  //       value,
  //     },
  // } = filters;
  return (
    <section>
      <select
        data-testid="column-filter"
        onChange={ ({ target }) => setFilterColumn(target.value) }
      >
        {options.map((op) => (<option value={ op } key={ op }>{op}</option>))}

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
        placeholder="number to look for"
        data-testid="value-filter"
        type="number"
        onChange={ (e) => setValue(e.target.value) }
      />

      <button
        data-testid="button-filter"
        type="button"
        onClick={ () => { tableSearch(); addRemoveColumn(); } }
      >
        Filtrar
      </button>

    </section>
  );
}

export default Filter;

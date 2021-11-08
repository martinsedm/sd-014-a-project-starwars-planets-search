import React, { useContext } from 'react';
import AppContext from '../context/MyContext';

function Selects() {
  const { titulos, tabelas, removeColumn, setValue, setFilterColumn,
    setComparison, comparison } = useContext(AppContext);
  return (
    <section>
      <select
        data-testid="column-filter"
        onChange={ ({ target }) => { setFilterColumn(target.value); } }
      >
        {titulos.map((op) => (<option value={ op } key={ op }>{op}</option>))}
      </select>

      <select
        name={ comparison }
        data-testid="comparison-filter"
        onChange={ ({ target }) => { setComparison(target.value); } }
      >
        <option>-</option>
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>

      <input
        data-testid="value-filter"
        type="number"
        onChange={ (e) => setValue(e.target.value) }
      />

      <button
        data-testid="button-filter"
        type="button"
        onClick={ () => { tabelas(); removeColumn(); } }
      >
        Filtrar
      </button>
    </section>
  );
}

export default Selects;

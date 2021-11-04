import React, { useState } from 'react';
import usePlanets from '../hooks/usePlanets';
import useOrder from '../hooks/useOrder';

const FilterByOrder = () => {
  const { planets } = usePlanets();
  const options = Object.keys(planets[0]);

  const [column, setColumn] = useState(options[0]);
  const [ord, setOrd] = useState('ASC');
  const { setOrder } = useOrder();

  const handleSubmit = () => setOrder({ column, sort: ord });

  return (
    <form className="filter-by-order">
      <select
        data-testid="column-sort"
        onChange={ ({ target: { value } }) => setColumn(value) }
      >
        { options.map((option, index) => (<option key={ index }>{ option }</option>)) }
      </select>
      <label className="radio" htmlFor="ASC">
        <input
          defaultChecked="true"
          data-testid="column-sort-input-asc"
          id="ASC"
          name="ord"
          type="radio"
          value="ASC"
          onClick={ ({ target: { value } }) => setOrd(value) }
        />
        Ascendente
      </label>
      <label className="radio" htmlFor="DESC">
        <input
          data-testid="column-sort-input-desc"
          id="DESC"
          name="ord"
          type="radio"
          value="DESC"
          onClick={ ({ target: { value } }) => setOrd(value) }
        />
        Descendente
      </label>
      <button type="button" data-testid="column-sort-button" onClick={ handleSubmit }>
        Ordenar
      </button>
    </form>
  );
};

export default FilterByOrder;

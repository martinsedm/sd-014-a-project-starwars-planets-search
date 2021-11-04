import React, { useContext, useState } from 'react';
import SWContext from '../context/SWContext';

function Order() {
  const { addOrderFilter, data } = useContext(SWContext);

  const [orderSettings, setSettingsOrder] = useState({
    column: 'name', sort: 'ASC', options: Object.keys(data[0]),
  });

  const handleChange = ({ target: { name, value } }) => {
    setSettingsOrder((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <select
        name="column"
        data-testid="column-sort"
        onChange={ (ev) => handleChange(ev) }
      >
        {orderSettings.options.map((option) => (
          <option name="column" key={ option } value={ option }>{option}</option>))}
      </select>
      <label htmlFor="ASC">
        Ascendente
        <input
          value="ASC"
          data-testid="column-sort-input-asc"
          type="radio"
          name="sort"
          id="ASC"
          onChange={ (ev) => handleChange(ev) }
        />
      </label>
      <label htmlFor="DESC">
        Decrescente
        <input
          onChange={ (ev) => handleChange(ev) }
          value="DESC"
          data-testid="column-sort-input-desc"
          type="radio"
          id="DESC"
          name="sort"
        />
      </label>
      <button
        onClick={ () => addOrderFilter({
          column: orderSettings.column, sort: orderSettings.sort,
        }) }
        data-testid="column-sort-button"
        type="button"
      >
        Ordenar
      </button>
    </>
  );
}

export default Order;

import React, { useContext, useState } from 'react';
import StarsContext from '../context/myContext';

export default function SortByColumn() {
  const { filters, setFilter } = useContext(StarsContext);
  const [sortByColumn, setSortByColumn] = useState('name');
  const [sortByOrder, setSortByOrder] = useState('ASC');

  const colunas = [
    'name',
    'rotation_period',
    'orbital_period',
    'diameter',
    'climate',
    'gravity',
    'terrain',
    'surface_water',
    'population',
    'films',
    'created',
    'edited',
    'url',
  ];

  const handleSelect = ({ target }) => {
    const { value } = target;
    setSortByColumn(value);
  };

  const handleClick = () => {
    setFilter({
      ...filters,
      order: {
        column: sortByColumn,
        sort: sortByOrder,
      },
    });
  };

  const SelectOrder = () => (
    <section>
      <p>Por ordem: </p>
      <div>
        <select data-testid="column-sort" onChange={ handleSelect }>
          {
            colunas.map((coluna, i) => (<option key={ i }>{coluna}</option>))
          }
        </select>

        <div
          onChange={ ({ target: { value } }) => setSortByOrder(value) }
        >
          <label htmlFor="column-sort">
            Ascendente
            <input
              data-testid="column-sort-input-asc"
              type="radio"
              name="column-sort"
              checked="checked"
              value="ASC"
            />
          </label>
          <label htmlFor="column-sort">
            Descendente
            <input
              data-testid="column-sort-input-desc"
              type="radio"
              name="column-sort"
              value="DESC"
            />
          </label>
        </div>
        <button
          type="button"
          data-testid="column-sort-button"
          onClick={ handleClick }
        >
          Ordenar
        </button>
      </div>
    </section>
  );

  const filterByOrder = SelectOrder();
  return filterByOrder;
}

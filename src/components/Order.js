import React, { useContext, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import SelectFilter from './SelectFilter';

const OPTIONS = [
  'name',
  'population',
  'diameter',
  'climate',
  'gravity',
  'terrain',
  'surface_water',
  'orbital_period',
  'rotation_period',
  'created',
  'edited',
  'url',
];

function Order() {
  const [order, setOrder] = useState('name');
  const [sort, setSort] = useState('ASC');

  const { filters, setFilters } = useContext(PlanetsContext);

  const handleSort = () => {
    setFilters({
      ...filters,
      order: {
        column: order,
        sort,
      },
    });
  };

  return (
    <>
      <SelectFilter
        dataTestId="column-sort"
        onChange={ ({ target }) => setOrder(target.value) }
        options={ OPTIONS }
        value={ order }
      />
      <label htmlFor="column-sort-input-asc">
        <input
          checked={ sort === 'ASC' }
          data-testid="column-sort-input-asc"
          id="column-sort-input-asc"
          name="column-sort-input"
          onChange={ ({ target }) => setSort(target.value) }
          type="radio"
          value="ASC"
        />
        Ascending
      </label>
      <label htmlFor="column-sort-input-desc">
        <input
          checked={ sort === 'DESC' }
          data-testid="column-sort-input-desc"
          id="column-sort-input-desc"
          name="column-sort-input"
          onChange={ ({ target }) => setSort(target.value) }
          type="radio"
          value="DESC"
        />
        Descending
      </label>
      <button
        data-testid="column-sort-button"
        onClick={ () => handleSort() }
        type="button"
      >
        Order
      </button>
    </>
  );
}

export default Order;

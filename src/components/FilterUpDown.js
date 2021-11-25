import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import { KEYS } from '../data/data';

function FilterUpDown() {
  const { filters, setFilters, filterPlanetName,
    setFilterPlanetName } = useContext(StarWarsContext);

  const ordersFilters = (e) => {
    const { value, name } = e.target;
    setFilters({ ...filters, order: { ...filters.order, [name]: value } });
    /* { FUNCIONA TAMBÉM } setFilters((prevState) => ({ ...prevState,
      order: { ...prevState.order, [name]: value } })); */
  };

  const { column, sort } = filters.order;

  const orderArray = (a, b, type) => {
    const oneLess = -1;

    if (Number.isNaN(parseInt(a, 10))) {
      if (a > b) return 1;
      if (a < b) return oneLess;
      return 0;
    }
    if (type === 'ASC') {
      return +a - +b;
    }
    if (type === 'DESC') {
      return +b - +a;
    }
  };

  const orderColumns = () => {
    if (sort === 'ASC') {
      const ascOrder = filterPlanetName
        .sort((a, b) => orderArray(a[column], b[column], 'ASC'));
      setFilterPlanetName(ascOrder);
    }
    if (sort === 'DESC') {
      const descOrder = filterPlanetName
        .sort((a, b) => orderArray(a[column], b[column], 'DESC'));
      setFilterPlanetName(descOrder);
    }
  };

  useEffect(orderColumns, [sort, column]);

  return (
    <div className="filter">
      <select
        data-testid="column-sort"
        onChange={ ordersFilters }
        value={ filters.order.column }
        name="column"
      >
        {KEYS.map((columns) => (
          <option key={ columns }>{columns}</option>
        ))}
      </select>
      <label htmlFor="ASC">
        ascendente
        <input
          onChange={ ordersFilters }
          id="ASC"
          type="radio"
          name="sort"
          data-testid="column-sort-input-asc"
          value="ASC"
        />
      </label>
      <label htmlFor="DESC">
        descendente
        <input
          onChange={ ordersFilters }
          id="DESC"
          type="radio"
          name="sort"
          data-testid="column-sort-input-desc"
          value="DESC"
        />
      </label>
      <button
        type="button"
        data-testid="column-sort-button"
        // onClick={ () => orderColumns() }
      >
        Ordenar
      </button>
    </div>
  );
}

export default FilterUpDown;

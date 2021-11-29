import React, { useContext, useState } from 'react';
import ContextApi from '../componentes/ContextApi';

function Table() {
  const { DataFiltered, filters, setFilters } = useContext(ContextApi);

  const { filterByNumericValues } = filters;
  const { order } = filters;

  const filterNum = filterByNumericValues;
  const NUM_SORT = -1;

  const [columnRef, setColumnRef] = useState('name');
  const [sortRef, setSortRef] = useState('ASC');

  const option = [
    'name', 'gravity', 'population', 'orbital_period',
    'diameter', 'rotation_period', 'surface_water', 'climate',
  ];
  const optionsNumber = ['population', 'orbital_period', 'diameter',
    'rotation_period', 'surface_water'];

  const filterNumericFunctions = (plt, { comparsion, column, value }) => {
    switch (comparsion) {
    case 'maior que':
      return plt[column] > Number(value);
    case 'menor que':
      return plt[column] < Number(value);
    case 'igual a':
      return plt[column] === value;

    default:
      return plt;
    }
  };

  const everyFilter = (plt) => {
    if (!filterNum[0]) return plt;
    return filterNum.every((filt) => filterNumericFunctions(plt, filt));
  };

  const xablauDoString = (a, b) => {
    switch (order.sort) {
    case 'ASC':
      if (a[order.column] < b[order.column]) {
        return NUM_SORT;
      } return false;

    case 'DESC':
      if (a[order.column] > b[order.column]) {
        return NUM_SORT;
      } return false;

    default:
      return null;
    }
  };

  const xablauDoNumber = (a, b) => {
    switch (order.sort) {
    case 'ASC':
      return Number(a[order.column]) - Number(b[order.column]);
    case 'DESC':
      return Number(b[order.column]) - Number(a[order.column]);
    default:
      return null;
    }
  };

  const DataFiltOrder = DataFiltered.filter(everyFilter)
    .sort(!optionsNumber.includes(columnRef) ? xablauDoString : xablauDoNumber);

  const handleButton = () => {
    setFilters({
      ...filters,
      order: {
        column: columnRef,
        sort: sortRef,
      },
    });
  };

  return (
    <div>
      <label htmlFor="orderColuna">
        Coluna p/ Ordenar:
        <select
          id="orderColuna"
          data-testid="column-sort"
          onChange={ ({ target: { value } }) => setColumnRef(value) }
        >
          {option.map((op) => <option value={ op } key={ op }>{op}</option>)}
        </select>
      </label>
      {' '}
      <label htmlFor="radiosref">
        ascendente
        <input
          type="radio"
          name="radios"
          id="radiosref"
          data-testid="column-sort-input-asc"
          value="ASC"
          onChange={ ({ target: { value } }) => setSortRef(value) }
        />
      </label>
      {' '}
      <label htmlFor="radiosref2">
        descendente
        <input
          type="radio"
          name="radios"
          id="radiosref2"
          data-testid="column-sort-input-desc"
          value="DESC"
          onChange={ ({ target: { value } }) => setSortRef(value) }
        />
      </label>
      <button
        type="button"
        data-testid="column-sort-button"
        onClick={ handleButton }
      >
        Ordernar
      </button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>Url</th>
          </tr>
        </thead>
        <tbody>
          {DataFiltOrder.map((info, key) => (
            <tr key={ key }>
              <td data-testid="planet-name">{info.name}</td>
              <td>{info.rotation_period}</td>
              <td>{info.orbital_period}</td>
              <td>{info.diameter}</td>
              <td>{info.climate}</td>
              <td>{info.gravity}</td>
              <td>{info.terrain}</td>
              <td>{info.surface_water}</td>
              <td>{info.population}</td>
              <td>{info.films}</td>
              <td>{info.created}</td>
              <td>{info.edited}</td>
              <td>{info.url}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;

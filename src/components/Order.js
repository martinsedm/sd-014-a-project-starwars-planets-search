import React, { useContext } from 'react';
import MyContext from '../context';

export default function Order() {
  const { state: { results: planets } } = useContext(MyContext);

  const { filterContext:
    { filters:
      { order, setOrder, result: { results } } } } = useContext(MyContext);

  const handleOrder = ({ target: { name, value } }) => {
    setOrder({
      ...order,
      [name]: value,
    });
  };

  const isNumeric = (value) => /^-?\d+$/.test(value);
  // https://stackoverflow.com/questions/175739/built-in-way-in-javascript-to-check-if-a-string-is-a-valid-number

  if (order.sort === 'ASC') {
    results.sort((a, b) => {
      if (isNumeric(a[order.column])) {
        return a[order.column] - b[order.column];
      }
      return a[order.column].localeCompare(b[order.column]);
    });
  }

  if (order.sort === 'DESC') {
    results.sort((a, b) => {
      if (isNumeric(a[order.column])) {
        return b[order.column] - a[order.column];
      }
      return b[order.column].localeCompare(a[order.column]);
    });
  }

  return (
    <div>
      <select data-testid="column-sort" onChange={ handleOrder } name="column">
        { Object.keys(planets[0]).map((planetInfo) => (
          planetInfo !== 'residents' ? <option key={ planetInfo }>{planetInfo}</option>
            : null
        )) }
      </select>
      <input
        type="radio"
        name="sort"
        value="ASC"
        data-testid="column-sort-input-asc"
        onChange={ handleOrder }
      />
      Ascendente
      <input
        type="radio"
        name="sort"
        value="DESC"
        data-testid="column-sort-input-desc"
        onChange={ handleOrder }
      />
      Descendente
      <button type="button" data-testid="column-sort-button"> Ordenar </button>
    </div>
  );
}

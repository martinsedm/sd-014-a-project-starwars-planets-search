import React, { useContext } from 'react';
import filterContext from '../context/filterContext';

function SortContext() {
  const {
    setSort,
    setColumnState,
    dataFilt } = useContext(filterContext);

  return (
    <form>
      <p>Ordenar</p>
      <select
        data-testid="column-sort"
        onChange={ (e) => setColumnState(e.target.value) }
      >
        { dataFilt.length > 0
          && Object.keys(dataFilt[0]).map((item) => (
            item !== 'residents'
            && (
              <option key={ item }>
                {item}
              </option>
            )
          ))}
      </select>
      <label htmlFor="ASC">
        ascendente
        <input
          type="radio"
          data-testid="column-sort-input-asc"
          id="ASC"
          value="ASC"
          onChange={ (e) => { setSort(e.target.value); } }
        />
      </label>
      <label htmlFor="DESC">
        descendente
        <input
          type="radio"
          data-testid="column-sort-input-desc"
          id="DESC"
          value="DESC"
          onChange={ (e) => { setSort(e.target.value); } }
        />
      </label>
      <button type="button" data-testid="column-sort-button">Ordenar</button>
    </form>
  );
}

export default SortContext;
